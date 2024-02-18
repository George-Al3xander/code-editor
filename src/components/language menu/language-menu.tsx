import {Menu} from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { $currentLanguage, $languages } from '../../state/atoms/atoms'
import LanguageItem from './language-item'
import { SettingsMenuButton, StyledMenuList} from '../chakra custom/styled'
import { ICON_SIZE, LANGUAGES_REACT_ICONS } from '../../conts'
import { IconType } from "react-icons";
const LanguageMenu = () => {

    const languagesVers = useRecoilValue($languages)
    const currentLanguage = useRecoilValue($currentLanguage);
    const Icon = LANGUAGES_REACT_ICONS[currentLanguage as "c++"] as IconType
    const langs = Object.entries(languagesVers)
    return (
            <Menu isLazy>
                <SettingsMenuButton label='Programming language' icon={<Icon size={ICON_SIZE}/>}/>               
                <StyledMenuList>
                    {langs.map(([lang, version]) => <LanguageItem version={version} language={lang}  key={lang+"preview-item"}/>)}
                </StyledMenuList>
            </Menu>
    )
}

export default LanguageMenu