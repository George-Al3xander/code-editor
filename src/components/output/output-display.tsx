import { useRecoilValue } from "recoil"
import { $output, $outputPosition, $outputVisibility } from "../../state/atoms/atoms"
import { Box } from "@chakra-ui/react"
import {  Text} from '@chakra-ui/react'
import { $isVertical } from "../../state/selectors/selectors"



const OutputDisplay = () => {
    const position = useRecoilValue($outputPosition)
    const handleBorder = (pos: string) => pos == position ? "1px solid gray" : "";
 
    const output = useRecoilValue($output)
    const visibilityStatus = useRecoilValue($outputVisibility)
    const isVertical = useRecoilValue($isVertical)
 
    return(<Box         
            display={visibilityStatus}
            p={4}            
            width={{
                base: "100vw",
                md: isVertical ? "calc(100vw - 50px)" : "20vw"
            }}
            height={{
                base: "20vh",
                md: isVertical ? "20vh" : 'calc(100vh - 60px)'            
            }}                        
            bg={"vscode.bg"}
            borderTop={handleBorder("column")}
            borderBottom={handleBorder("column-reverse")}
            borderRight={handleBorder("row-reverse")}
            borderLeft={handleBorder("row")}
        >
        <Text  mb={2} textTransform={"uppercase"}>Output</Text>
            <Box  
                maxHeight={{
                    base: "calc(20vh - 60px)",
                    md: isVertical ? "calc(20vh - 60px)" : 'calc(100vh - 120px)'            
                }}  
                overflow={"auto"}
            >
                {output
                ? output.map((line, i) => <Text key={i}>{line}</Text>)
                : 'Click "Run Code" to see the output here'}
            </Box>
    </Box>)


}

export default OutputDisplay