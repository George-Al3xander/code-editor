import { Box, Button, HStack, Spinner } from '@chakra-ui/react'
import  { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import LanguageMenu from './language menu/language-menu';
import { useRecoilValue } from 'recoil';
import { $currentLanguage } from '../state/atoms/atoms';
import Output from './Output';
import DownloadModal from './download-modal';

 const CodeEditor = () => {    
    const editorRef = useRef<any | null>(null)
    
    const onMount = (editor: any) => {
        editorRef.current = editor
        editor.focus()
    }
    const currentLanguage = useRecoilValue($currentLanguage);


    

    return (
        <Box>
            <HStack spacing={4}>
                <Box w="50%" >
                    <LanguageMenu />
                    <Editor 
                        theme='vs-dark'
                        height="75vh"   
                        onMount={onMount}                
                        language={currentLanguage}
                        defaultValue="// some comment" 
                        loading={<Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />}
                    />
                </Box>
                <Output editorRef={editorRef}/>
            </HStack>
            <DownloadModal editorRef={editorRef}/>
            {/* <Button onClick={download}>Download</Button> */}
        </Box>
    )
}

export default CodeEditor