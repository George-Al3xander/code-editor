import { selector, selectorFamily } from "recoil";
import { getLanguages } from "../../utils/utils";
import { $currentLanguage, $languages, $outputPosition, $outputVisibility } from "../atoms/atoms";
import { LANGUAGES_FILE_EXTENSIONS } from "../../conts";




export const $langInitialSelector = selector({
    key: "initialLanguagesFetch",
    get: getLanguages
})


export const $selectedCheck = selectorFamily({
    key: "CheckProviderLangForCheck",
    get: (newLang: string) => ({get}) => {
        const currentLang = get($currentLanguage)

        return newLang == currentLang
    }
})

export const $languageVersion = selectorFamily({
    key: "GetLanguageVer",
    get: (lang: string) => ({get}) => {
        const versions = get($languages);

        return versions[lang as 'javascript']
    }
})


export const $currentLangExt = selector({
    key: "GetCurrLangExt",
    get: ({get}) => {
        const currLang =  get($currentLanguage);
        return LANGUAGES_FILE_EXTENSIONS[currLang as "javascript"]
    }
})

export const $isVertical = selector({
    key: "GetOutputPositionCheck",
    get: ({get}) => {
        const position =  get($outputPosition);
        return (position == "column" || position == "column-reverse") 
    }
})


export const $isHidden = selector({
    key: "GetOutputPositionStatus",
    get: ({get}) => {
        const status =  get($outputVisibility);
        return status == "none"
    }
})

