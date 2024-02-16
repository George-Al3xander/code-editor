import { Box, Button, Menu, MenuButton,  MenuList, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { $currentLanguage, $languages } from '../../state/atoms/atoms'
import LanguageItem from './language-item'

const LanguageMenu = () => {

    const languagesVers = useRecoilValue($languages)
    const currentLanguage = useRecoilValue($currentLanguage);
   
    const langs = Object.entries(languagesVers)
    return (
        <Box>
            <Text mb={2} fontSize={"lg"}>Language: </Text>
            <Menu isLazy>
                <MenuButton _active={{bg:"vscode.secondary"}} mb={2} _hover={{bg:"vscode.secondary"}} color={"vscode.primary"}  bg={"vscode.bg"} as={Button}>
                    {currentLanguage}
                </MenuButton>
                <MenuList borderColor={"vscode.secondary"} bg={"vscode.bg"}>
                    {langs.map(([lang, version]) => <LanguageItem version={version} language={lang}  key={lang+"preview-item"}/>)}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageMenu