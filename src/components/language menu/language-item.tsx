import {  Text} from "@chakra-ui/react";
import { PistonRuntime } from "../../types/types";
import { $selectedCheck } from "../../state/selectors/selectors";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { $currentLanguage } from "../../state/atoms/atoms";
import { StyledMenuItem } from "../chakra custom/styled";





const LanguageItem = ({language,version}:PistonRuntime) => {

    
    const isSelected = useRecoilValue($selectedCheck(language))
    const setCurrentLanguage = useSetRecoilState($currentLanguage)
    return(<StyledMenuItem onClick={() => setCurrentLanguage(language)} isSelected={isSelected}>{language} &nbsp; <Text as="span" fontSize={"sm"} color={"gray.500"}>({version})</Text> </StyledMenuItem>)


}

export default LanguageItem