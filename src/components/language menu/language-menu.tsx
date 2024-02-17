import { Box, Button, IconButton, Menu, MenuButton,  MenuList, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { $currentLanguage, $languages } from '../../state/atoms/atoms'
import LanguageItem from './language-item'
import { SettingsTooltip, StyledMenuButton, StyledMenuList, settingsButtonSyles } from '../chakra custom/styled'
import { LANGUAGES_REACT_ICONS } from '../../conts'
import { IconType } from "react-icons";
const LanguageMenu = () => {

    const languagesVers = useRecoilValue($languages)
    const currentLanguage = useRecoilValue($currentLanguage);
    const Icon = LANGUAGES_REACT_ICONS[currentLanguage as "c++"] as IconType
    const langs = Object.entries(languagesVers)
    return (
            <Menu isLazy>
               
               <SettingsTooltip label="Programming language">
               <MenuButton    
            as={IconButton} 
            aria-label="settings" 
            icon={<Icon />} {...settingsButtonSyles} />

               </SettingsTooltip>
                <StyledMenuList>
                    {langs.map(([lang, version]) => <LanguageItem version={version} language={lang}  key={lang+"preview-item"}/>)}
                </StyledMenuList>
            </Menu>
    )
}

export default LanguageMenu