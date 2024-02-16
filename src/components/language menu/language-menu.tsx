



import { Box, Button, Menu, MenuButton,  MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { $languages } from '../../state/atoms/atoms'
import LanguageItem from './language-item'

const LanguageMenu = () => {

    const languagesVers = useRecoilValue($languages)

    return (
        <Box>
            <Text mb={2} fontSize={"lg"}>Language: </Text>
            <Menu >
            <MenuButton color={"vscode.primary"}  bg={"vscode.bg"} as={Button}>
                Actions
            </MenuButton>
            <MenuList>
                {Object.entries(languagesVers).map(([lang, version]) => <LanguageItem version={version} language={lang}  key={lang+"preview-item"}/>)}
            </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageMenu