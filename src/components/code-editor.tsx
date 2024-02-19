import { Box,Spinner} from '@chakra-ui/react'
import  { useRef} from 'react'
import Editor from '@monaco-editor/react';
import { useRecoilValue } from 'recoil';
import { $currentLanguage, $outputPosition} from '../state/atoms/atoms';



import Toolbar from './toolbar';

import OutputDisplay from './output/output-display';
import { $isHidden, $isVertical } from '../state/selectors/selectors';

 const CodeEditor = () => {    
    const editorRef = useRef<any | null>(null)    
    const onMount = (editor: any) => {
        editorRef.current = editor
        editor.focus()
    }
    const currentLanguage = useRecoilValue($currentLanguage);
    const position = useRecoilValue($outputPosition)
    const isVertical = useRecoilValue($isVertical)
    const isHidden = useRecoilValue($isHidden)
    



    return (
        <Box display={"flex"} flexDirection={{base: "column", md:"row"}}>                    
            <Toolbar editorRef={editorRef}/>
            <Box  display={"flex"}  flexDirection={{base: isVertical ? position as "column" : "column", md: position as "column"}} >
                <Box    
                    width={{
                        base: "100vw",
                        md: 
                            (isHidden || isVertical) 
                            ? "calc(100vw - 50px)"                              
                            : "calc(80vw - 50px)"
                    }}
                    height={{
                        base: `calc(${isHidden ? "100" : "80"}vh - 110px)`,
                        md: 
                            (isVertical && !isHidden)
                            ? "calc(80vh - 60px)" 
                            : 'calc(100vh - 60px)'            
                    }} 
                    maxHeight={{
                        base: `calc(${isHidden ? "100" : "80"}vh - 110px)`,
                        md: 
                        (isVertical && !isHidden)
                        ? "calc(80vh - 60px)" 
                        : 'calc(100vh - 60px)'           
                    }}                     
                >                    
                    <Editor      
                        className='editor'                   
                        theme='vs-dark'                        
                        options={{automaticLayout: true}}                        
                        onMount={onMount}                
                        language={currentLanguage}
                        defaultValue="// some comment" 
                        loading={
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />}
                    />
                </Box>     
                <OutputDisplay />                    
            </Box>
            
        </Box>
    )
}

export default CodeEditor