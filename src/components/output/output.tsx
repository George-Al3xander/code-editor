import { Box, Button, Text} from '@chakra-ui/react'
import useRunCode from '../../hooks/useRunCode'
import { useRecoilValue } from 'recoil'
import { $outputPosition, $outputVisibility } from '../../state/atoms/atoms'



const Output = ({editorRef}:{editorRef:any}) => {
    
  const position = useRecoilValue($outputPosition)

    const {isError, isLoading, output, runCode} = useRunCode({editorRef})
    const visibilityStatus = useRecoilValue($outputVisibility)
    return (
      <Box flexBasis={"100%"}  display={visibilityStatus}>
            <Text mb={2} fontSize={"lg"}>Output:</Text>
            <Button isLoading={isLoading} onClick={runCode} variant={"outline"} colorScheme='green' mb={4}>Run code</Button>
            <Box
              
              h={"15vh"}
              //h={(position == "column" || position == "column-reverse") ? "30vh" : "100%"}
              p={2}
              color={isError ? "red.400" : ""}
              border="1px solid"
              borderRadius={4}
              borderColor={isError ? "red.500" : "white"}              
            
            >
              
              {output
                ? output.map((line, i) => <Text key={i}>{line}</Text>)
                : 'Click "Run Code" to see the output here'}
            </Box>
      </Box>
    )
}

export default Output