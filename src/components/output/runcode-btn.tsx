import { Button } from '@chakra-ui/react'
import React from 'react'

const RuncodeBtn = () => {

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
  
    return (<Button isLoading={isLoading} onClick={runCode} variant={"outline"} colorScheme='green' mb={4}>Run code</Button>)
}

export default RuncodeBtn