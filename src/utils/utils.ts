import { LangugeMap} from "../types/types";
import { getRuntimes } from "./api"

const LANGUAGES = ["javascript","typescript","python","java","csharp","php","c++"]
const BACKUP_LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
  };
  


export const getLanguages = async () => {
    try {
        const runtimes = await getRuntimes();
        //const runtimesByVerMap = new Map(Object.entries(runtimes.map((run) => [run.language, run.version])))
        const selectedRuntimes = runtimes.filter((run) => LANGUAGES.includes(run.language))
        let newArr: LangugeMap = {}
        for(const lang of selectedRuntimes) {
            const duplicate = newArr[lang.language]
            if(duplicate) {
                if(parseFloat(duplicate) < parseFloat(lang.version)) {               
                    newArr[lang.language] = lang.version
                }            
            } else {
                newArr[lang.language] = lang.version
            }
        }

        return newArr
    } catch (error) {
        return  BACKUP_LANGUAGE_VERSIONS
    }
}

