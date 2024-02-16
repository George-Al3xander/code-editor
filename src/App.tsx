import { Box } from "@chakra-ui/react"
import CodeEditor from "./components/code-editor"



function App() {


  

  return (
    <Box minHeight={"100vh"} bg="vscode.accent" color={"white"} px={6} py={8}>
      <CodeEditor />
    </Box>
  )
}

export default App
