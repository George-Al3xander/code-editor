import {  ChakraProps, IconButton, Menu,  MenuButton,  MenuItemOption,  MenuOptionGroup } from "@chakra-ui/react"
import { SettingsTooltip, StyledMenuButton, StyledMenuList, menuItemStyles, settingsButtonSyles } from "./chakra custom/styled"
import { useRecoilState, useSetRecoilState } from "recoil"
import { $outputPosition, $outputVisibility } from "../state/atoms/atoms"
import { IoSettings } from "react-icons/io5";


type MenuItem = {
    value: string,
    title: string,
    additionalProps?: ChakraProps 
}

type MenuGroup ={
    title: string,
    onChange: (data: string | string[]) => void,
    menuItems: MenuItem[]
}

const Settings = () => {

    const setPosition = useSetRecoilState($outputPosition)
    const [visibilityStatus,setVisibility] = useRecoilState($outputVisibility)

    const menuGroups : MenuGroup[] = [
        {
            title: "Output position",
            onChange: (data: string | string[]) => setPosition(typeof data == "string" ? data : data[0]),
            menuItems: [
                {value: "column-reverse", title: "top"},
                {value: "column", title: "bottom"},
                {value: "row", title: "right", additionalProps: {
                    display: {base: "none", md: "initial"}
                }},
                {value: "row-reverse", title: "left", additionalProps: {
                    display: {base: "none", md: "initial"}
                }},
            ]
        },
        {
            title: "Output visibility",
            onChange: (data: string | string[]) => setVisibility(typeof data == "string" ? data : data[0]),
            menuItems: [
                {value: "initial",title: "visible"},
                {value: "none",title: "hidden"},
            ]
        },
    ]

  return (<Menu closeOnSelect={false}>

        <SettingsTooltip label="Settings">
            <MenuButton    
            as={IconButton} 
            aria-label="settings" 
            icon={<IoSettings />} {...settingsButtonSyles} />
        </SettingsTooltip>
    
        <StyledMenuList minWidth='240px'>   
            {menuGroups.map(({title, menuItems, onChange}) => 
            <MenuOptionGroup 
            onChange={onChange}
            defaultValue={menuItems[0].value} 
            title={title} 
            type='radio'
            >
                {menuItems.map(({title,value,additionalProps}) => 
                <MenuItemOption 
                    isDisabled={visibilityStatus == "none"}
                    textTransform={"capitalize"} 
                    value={value} 
                    {...additionalProps}
                    {...menuItemStyles}
                >
                    {title}
                </MenuItemOption>)}
            </MenuOptionGroup>)}
        </StyledMenuList>
    </Menu>)
}

export default Settings