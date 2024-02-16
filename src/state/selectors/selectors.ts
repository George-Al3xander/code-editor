import { selector, selectorFamily } from "recoil";
import { getLanguages } from "../../utils/utils";
import { $currentLanguage, $languages } from "../atoms/atoms";
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