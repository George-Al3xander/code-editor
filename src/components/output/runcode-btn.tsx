import { Box, Button, IconButton, Text} from '@chakra-ui/react'
import useRunCode from '../../hooks/useRunCode'
import { useRecoilValue } from 'recoil'
import { $outputPosition, $outputVisibility } from '../../state/atoms/atoms'
import { SettingsTooltip, settingsButtonSyles } from '../chakra custom/styled'
import { FaPlay } from 'react-icons/fa'
import { ICON_SIZE } from '../../conts'



const RuncodeBtn = ({editorRef}:{editorRef:any}) => {
    
  // const position = useRecoilValue($outputPosition)

    const {isError, isLoading,  runCode} = useRunCode({editorRef})
    const visibilityStatus = useRecoilValue($outputVisibility)
    return (
      <SettingsTooltip label={"Run Code"}>
            <IconButton isLoading={isLoading} onClick={runCode} {...settingsButtonSyles}  icon={<FaPlay size={ICON_SIZE}/>} aria-label="Run code"  /> 
        </SettingsTooltip>      
     
    )
}

export default RuncodeBtn