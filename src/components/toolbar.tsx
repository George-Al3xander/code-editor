import { Box, IconButton, Tooltip } from "@chakra-ui/react"



import Settings from "./settings-menu";
import LanguageMenu from "./language menu/language-menu";


const Toolbar = () => {


    return(<Box  bg={"vscode.secondary"}>
       
                                <Settings />
                                <LanguageMenu />
        
        
    </Box>)
}

export default Toolbar