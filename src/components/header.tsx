import { Box, Heading } from "@chakra-ui/react"
import Settings from "./settings-menu"




const Header = () => {



    return(<Box zIndex={20} position={"fixed"} w={"100%"} color={"white"} as="header" display={"flex"} p={6} justifyContent={"space-between"} bg={"vscode.secondary"}>
       <Heading as='h3' size='2xl' color={"vscode.primary"}>
            VSClone
        </Heading>        
    </Box>)
}

export default Header