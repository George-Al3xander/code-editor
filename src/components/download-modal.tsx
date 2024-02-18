import { Button, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useRecoilValue } from "recoil";
import { $currentLanguage } from "../state/atoms/atoms";
import { $currentLangExt } from "../state/selectors/selectors";
import { FaPlay,FaFileDownload } from "react-icons/fa";
import { SettingsTooltip, settingsButtonSyles } from "./chakra custom/styled";
import { ICON_SIZE } from "../conts";

function  DownloadModal({editorRef}:{editorRef:any}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [fileName, setFileName] = useState("")
    const initialRef = useRef(null)
    const currExt = useRecoilValue($currentLangExt)
    
    const download = () => {
        const file = new File([editorRef.current.getValue()], 
        `${fileName ? fileName : "mycode"}${currExt}`, {
            type: 'text/plain',
          })

        const link = document.createElement('a')
        const url = URL.createObjectURL(file)

        link.href = url
        link.download = file.name
        document.body.appendChild(link)
        link.click()

        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
    }
  
    return (
      <>
        <SettingsTooltip label={"Download code"}>
            <IconButton {...settingsButtonSyles}  icon={<FaFileDownload size={ICON_SIZE}/>} aria-label="Download button" onClick={onOpen} /> 
        </SettingsTooltip>
  
        <Modal
          initialFocusRef={initialRef}         
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Download your code</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>File name</FormLabel>
                <InputGroup>
                    <Input defaultValue={fileName} onChange={(e) => setFileName(e.target.value)} ref={initialRef} placeholder='mycode' />
                    <InputRightAddon>{currExt}</InputRightAddon>
                
                </InputGroup>
              </FormControl>
  
             
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={download} colorScheme='green' mr={3}>
                Download
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default DownloadModal