import { Box, Spinner } from '@chakra-ui/react'
import  { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import LanguageMenu from './language menu/language-menu';

 const CodeEditor = () => {    
    const editorRef = useRef<any | null>(null)
    
    const onMount = (editor: any) => {
        editorRef.current = editor
        editor.focus()
    }
    return (
        <Box>
            <LanguageMenu />
            <Editor 
                theme='vs-dark'
                height="75vh"   
                onMount={onMount}
                defaultLanguage="javascript" 
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
    )
}

export default CodeEditor