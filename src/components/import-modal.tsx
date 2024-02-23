import { Button, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { $currentLangExt, $setCurrentLangByExt } from "../state/selectors/selectors";
import { FaFileDownload , FaFile} from "react-icons/fa";
import { SettingsTooltip, settingsButtonSyles } from "./chakra custom/styled";
import { ICON_SIZE } from "../conts";
import { getLangugeByExt } from "../utils/utils";

function  ImportModal({editorRef}:{editorRef:any}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [importData, setImportData] = useState("")
    const initialRef = useRef(null);
    const [currExt,setCurrExt] = useState(".js")
    const setCurrRecoilExt =  useSetRecoilState($setCurrentLangByExt(currExt))
    const toast = useToast()
    const download = () => {
        const newLang = getLangugeByExt(currExt)
      
        editorRef.current.getModel().setValue(importData);
        setCurrRecoilExt("")
        toast({
          title: 'File imported.',
          description: `Switched current language to ${newLang}`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        onClose()
    }

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;
        if(!files) return 
        const fr = new FileReader()
        const file = files[0];
        const splitted = file.name.split(".")
        const fileName = splitted[0];
        const ext  = splitted[splitted.length - 1];
        setCurrExt(`.${ext}`)
        
        fr.onload = function(event) {
          if(!event.target) return
          setImportData(event.target.result as string)
          
        }
        fr.readAsText(file);

        const res = fr.result
      
    }
  
    return (
      <>
        <SettingsTooltip label={"Import code"}>
            <IconButton {...settingsButtonSyles}  icon={<FaFile size={ICON_SIZE}/>} aria-label="Download button" onClick={onOpen} /> 
        </SettingsTooltip>
  
        <Modal
          initialFocusRef={initialRef}         
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent color={"white"} bg={"vscode.bg"}>
            <ModalHeader>Import your code</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>                            
                    <Input onChange={onChange} accept=".js,.ts , .tsx, .py, .java, .cs, .php, .cpp" type="file" />                
              </FormControl>
  
             
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={download} colorScheme='green' mr={3}>
                Import
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ImportModal