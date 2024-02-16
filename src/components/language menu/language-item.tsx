import { MenuItem , Text} from "@chakra-ui/react";
import { PistonRuntime } from "../../types/types";
import { $selectedCheck } from "../../state/selectors/selectors";





const LanguageItem = ({language,version}:PistonRuntime) => {

    
    const isSelected = $selectedCheck(language)


    return(<MenuItem bg={"vscode.bg"}>{language} &nbsp; <Text as="span" fontSize={"sm"} color={"gray.500"}>({version})</Text> </MenuItem>)


}

export default LanguageItem