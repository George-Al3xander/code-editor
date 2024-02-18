import { Box } from "@chakra-ui/react"
import CodeEditor from "./components/code-editor"
import Header from "./components/header"



function App() {


  

  return (<>
         <Box 
            minHeight={"100vh"} 
           
            bg="vscode.accent" 
            color={"white"}  
         >
      <Header />
      <CodeEditor />
    </Box>
  </>)
}

export default App
