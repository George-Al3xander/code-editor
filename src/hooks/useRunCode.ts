import  {  useState } from 'react'
import { executeCode } from '../utils/api';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { $currentLanguage, $output } from '../state/atoms/atoms';
import { $isHidden, $languageVersion } from '../state/selectors/selectors';
import {useToast } from '@chakra-ui/react'


const useRunCode = ({editorRef}:{editorRef:any}) => {
    const language = useRecoilValue($currentLanguage);
    const version = useRecoilValue($languageVersion(language));
    const isHidden= useRecoilValue($isHidden)
    const toast = useToast();
    const  setOutput = useSetRecoilState($output)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
 
    
    const runCode = async () => {
      const sourceCode = editorRef.current.getValue();
      if (!sourceCode) return;
      try {
        setIsLoading(true);
        const { run: result } = await executeCode({currLanguage: {version,language}, sourceCode});
        setOutput(result.output.split("\n"));
        if(isHidden) {
          if(result.stderr) {
              toast({
                title: "Compilation error",
                //description: "Syntax or non-existing variable",
                status: "error",
                duration: 6000,
              });
          } else {
            toast({
              title: "Successful compilation",              
              status: "success",
              duration: 6000,
            });
          }
        }
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

    return {isError, isLoading, runCode}
}

export default useRunCode