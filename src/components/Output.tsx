import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { executeCode } from '../utils/api';
import { useRecoilValue } from 'recoil';
import { $currentLanguage } from '../state/atoms/atoms';
import { $languageVersion } from '../state/selectors/selectors';


const Output = ({editorRef}:{editorRef:any}) => {
    const language = useRecoilValue($currentLanguage);
    const version = useRecoilValue($languageVersion(language))
    const toast = useToast();
    const [output, setOutput] = useState<string[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
          setIsLoading(true);
          const { run: result } = await executeCode({currLanguage: {version,language}, sourceCode});
          setOutput(result.output.split("\n"));
          result.stderr ? setIsError(true) : setIsError(false);
        } catch (error: any) {
          
          toast({
            title: "An error occurred.",
            description: error.message || "Unable to run code",
            status: "error",
            duration: 6000,
          });
        } finally {
          setIsLoading(false);
        }
      };


    

    return (
        <Box w="50%">
            <Text mb={2}fontSize={"lg"}>Output</Text>
            <Button isLoading={isLoading} onClick={runCode} variant={"outline"} colorScheme='green' mb={4}>Run code</Button>
            <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
        </Box>
    )
}

export default Output