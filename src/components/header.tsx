import { Box, Heading } from "@chakra-ui/react"
import Settings from "./settings-menu"




const Header = () => {



    return(<Box  color={"white"} as="header" display={"flex"} p={3} justifyContent={"space-between"} bg={"vscode.secondary"}>
       <Heading as='h3' size='lg' color={"vscode.primary"}>
            VSClone
        </Heading>        
    </Box>)
}

export default Header