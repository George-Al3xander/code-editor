import { ReactNode } from "react";
import { Box, Button, ChakraProps, IconButton, Menu, MenuButton,  MenuButtonProps,  MenuItem,  MenuList, Text, Tooltip, TooltipProps } from '@chakra-ui/react'

type StyledProps = {children: ReactNode} & ChakraProps

export const menuItemStyles = {
    _hover: {bg: "vscode.accent",color: "vscode.primary"},
    bg: "vscode.bg"
}


export const StyledMenuButton = ({children}: StyledProps) => (
    <MenuButton 
        _active={{bg:"vscode.secondary"}} 
        _hover={{bg:"vscode.secondary"}}
        color={"vscode.primary"}  
        bg={"vscode.bg"} 
        mb={2} 
        as={Button}
        
    >
    {children}
</MenuButton>)


export const StyledMenuList = ({children,...props}: StyledProps) => (
    <MenuList {...props} borderColor={"vscode.secondary"} bg={"vscode.bg"}>
        {children}
</MenuList>)

export const StyledMenuItem = ({children, onClick,isSelected,...props}: StyledProps & {onClick: (data: any) => void, isSelected?: boolean}) => (<MenuItem 
        onClick={onClick} 
        {...menuItemStyles}
        color={(isSelected ? "vscode.primary" : "")}  
        bg={isSelected ? "vscode.accent" :"vscode.bg"}
        {...props}
        >
            {children}
</MenuItem>)


export const  SettingsTooltip = ({children,...props}: StyledProps & TooltipProps) => (
    <Tooltip fontSize='md' bg={"vscode.bg"} hasArrow  placement={'auto-start'} {...props}>{children}</Tooltip>
)

export const settingsButtonSyles : ChakraProps & MenuButtonProps = {
    color: "gray", 
    bg: "transparent",
    _hover: {bg: "transparent", color:"white"},
    _active: { 
        color:"white", 
        borderTop: {base: "3px solid white", md: "0"}, 
        borderLeft: {base: "0", md: "3px solid white"}, 
        borderRadius: 0
    }
}