import { BACKUP_LANGUAGE_VERSIONS, LANGUAGES, LANGUAGES_FILE_EXTENSIONS } from "../conts";
import { LangugeMap} from "../types/types";
import { getRuntimes } from "./api"

const backwardsLanguages =  Object.fromEntries(Object.entries(LANGUAGES_FILE_EXTENSIONS).map(a => a.reverse()))



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


export const getLangugeByExt = (ext: string) => {   
    return backwardsLanguages[ext]

}

