import { MenuItem , Text} from "@chakra-ui/react";
import { PistonRuntime } from "../../types/types";
import { $selectedCheck } from "../../state/selectors/selectors";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { $currentLanguage } from "../../state/atoms/atoms";





const LanguageItem = ({language,version}:PistonRuntime) => {

    
    const isSelected = useRecoilValue($selectedCheck(language))
    const setCurrentLanguage = useSetRecoilState($currentLanguage)
    return(<MenuItem onClick={() => setCurrentLanguage(language)} _hover={{bg: "vscode.accent",color: "vscode.primary"}} color={(isSelected ? "vscode.primary" : "")}  bg={isSelected ? "vscode.accent" :"vscode.bg"}>{language} &nbsp; <Text as="span" fontSize={"sm"} color={"gray.500"}>({version})</Text> </MenuItem>)


}

export default LanguageItem