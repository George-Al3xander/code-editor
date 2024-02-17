import { Box, Button, HStack, Spinner, Stack } from '@chakra-ui/react'
import  { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import LanguageMenu from './language menu/language-menu';
import { useRecoilValue } from 'recoil';
import { $currentLanguage, $outputPosition } from '../state/atoms/atoms';
import Output from './output/output';
import DownloadModal from './download-modal';
import { useResizeDetector } from 'react-resize-detector';
import Toolbar from './toolbar';

 const CodeEditor = () => {    
    const editorRef = useRef<any | null>(null)
    
    const onMount = (editor: any) => {
        editorRef.current = editor
        editor.focus()
    }
    const currentLanguage = useRecoilValue($currentLanguage);
    const position = useRecoilValue($outputPosition)

    

    return (
        <Box display={"flex"} flexDirection={{base: "column", md:"row"}}>
            <Toolbar />
            <Box px={{base: 0,md:6}} display={"flex"}  flexDirection={position as "column"}  gap={4}>
                <Box 
                w={(position == "column" || position == "column-reverse") ? "100%" : "70%"}
                >
                    
                    <Editor                         
                        theme='vs-dark'
                        options={{automaticLayout: true}}
                        height="55vh"   
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
               
                <Output editorRef={editorRef}/>
            </Box>
            <DownloadModal editorRef={editorRef}/>      
        </Box>
    )
}

export default CodeEditor