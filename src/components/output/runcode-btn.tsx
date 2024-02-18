import {  IconButton} from '@chakra-ui/react'
import useRunCode from '../../hooks/useRunCode'

import { SettingsTooltip, settingsButtonSyles } from '../chakra custom/styled'
import { FaPlay } from 'react-icons/fa'
import { ICON_SIZE } from '../../conts'



const RuncodeBtn = ({editorRef}:{editorRef:any}) => {
    
 

    const {isLoading,  runCode} = useRunCode({editorRef})
  
    return (
      <SettingsTooltip label={"Run Code"}>
            <IconButton isLoading={isLoading} onClick={runCode} {...settingsButtonSyles}  icon={<FaPlay size={ICON_SIZE}/>} aria-label="Run code"  /> 
        </SettingsTooltip>      
     
    )
}

export default RuncodeBtn