import { Box, Stack} from "@chakra-ui/react"



import Settings from "./settings-menu";
import LanguageMenu from "./language menu/language-menu";
import DownloadModal from "./download-modal";
import RuncodeBtn from "./output/runcode-btn";


const Toolbar = ({editorRef}:{editorRef:any}) => {


    return(<Box height={{base: "initial", md: "calc(100vh - 60px)"}} display={"flex"} p={1} justifyContent={"space-between"} flexDirection={{base: "row-reverse", md: "column"}}  bg={"vscode.secondary"}>       
            <Stack gap={5} direction={{base: "row-reverse", md: "column"}}>
                <RuncodeBtn editorRef={editorRef}/>
                <LanguageMenu />   
                <DownloadModal editorRef={editorRef}/>          
            </Stack>  
        <Settings />
    </Box>)
}

export default Toolbar