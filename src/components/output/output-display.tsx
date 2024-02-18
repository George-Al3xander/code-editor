import { useRecoilState, useRecoilValue } from "recoil"
import { $output, $outputPosition, $outputVisibility } from "../../state/atoms/atoms"
import { Box } from "@chakra-ui/react"
import {  Text} from '@chakra-ui/react'
import { $isVertical } from "../../state/selectors/selectors"



const OutputDisplay = () => {
    const position = useRecoilValue($outputPosition)
    const handleBorder = (pos: string) => pos == position ? "1px solid gray" : "";
 
    const [output,setOutput] = useRecoilState($output)
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
        <Box mb={2} flexWrap={"wrap"} width={"100%"} justifyContent={"space-between"} alignItems={"center"} gap={2} display={"flex"}>
            <Text   textTransform={"uppercase"}>Output</Text>
            <Text opacity={".7"} _hover={{cursor: "pointer", opacity: "1"}} onClick={() => setOutput(null)} textTransform={"uppercase"}  fontSize={"small"}>Reset</Text>
        </Box>
            <Box  
                maxHeight={{
                    base: "calc(20vh - 60px)",
                    md: isVertical ? "calc(20vh - 60px)" : 'calc(100vh - 120px)'            
                }}  
                overflow={"auto"}
            >
                {output
                ? output.map((line, i) => <Text key={i}>{line}</Text>)
                : 'Click play button to compile your code'}
            </Box>
    </Box>)


}

export default OutputDisplay