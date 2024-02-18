import {  ChakraProps, IconButton, Menu,  MenuButton,  MenuItemOption,  MenuOptionGroup } from "@chakra-ui/react"
import { SettingsMenuButton, SettingsTooltip, StyledMenuButton, StyledMenuList, menuItemStyles, settingsButtonSyles } from "./chakra custom/styled"
import { useRecoilState, useSetRecoilState } from "recoil"
import { $outputPosition, $outputVisibility } from "../state/atoms/atoms"
import { IoSettings } from "react-icons/io5";
import { ICON_SIZE } from "../conts";


type MenuItem = {
    value: string,
    title: string,
    additionalProps?: ChakraProps & {isDisabled?: boolean}
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
                {value: "column-reverse", title: "top", additionalProps: {
                    isDisabled: visibilityStatus == "none"

                }},
                {value: "column", title: "bottom", additionalProps: {
                    isDisabled: visibilityStatus == "none"

                }},
                {value: "row", title: "right", additionalProps: {
                    display: {base: "none", md: "initial"},
                    isDisabled: visibilityStatus == "none"
                }},
                {value: "row-reverse", title: "left", additionalProps: {
                    display: {base: "none", md: "initial"},
                    isDisabled: visibilityStatus == "none"
                }},
            ]
        },
        {
            title: "Output visibility",
            onChange: (data: string | string[]) => setVisibility((typeof data == "string" ? data : data[0]) as "none"),
            menuItems: [
                {value: "initial",title: "visible"},
                {value: "none",title: "hidden"},
            ]
        },
    ]

  return (<Menu closeOnSelect={false}>

       <SettingsMenuButton  label="Settings" icon={<IoSettings size={ICON_SIZE}/>}/>
    
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