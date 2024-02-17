import { Box } from "@chakra-ui/react"
import CodeEditor from "./components/code-editor"
import Header from "./components/header"



function App() {


  

  return (<>
      <Header />
         <Box 
            minHeight={"100vh"} 
            pt={"7rem"} 
            bg="vscode.accent" 
            color={"white"}  
         >
      <CodeEditor />
    </Box>
  </>)
}

export default App
