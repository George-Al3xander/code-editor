import  {  useState } from 'react'
import { executeCode } from '../utils/api';
import { useRecoilValue } from 'recoil';
import { $currentLanguage } from '../state/atoms/atoms';
import { $languageVersion } from '../state/selectors/selectors';
import {useToast } from '@chakra-ui/react'


const useRunCode = ({editorRef}:{editorRef:any}) => {
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

    return {isError, isLoading, output, runCode}
}

export default useRunCode