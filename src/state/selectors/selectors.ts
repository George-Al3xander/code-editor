import { selector, selectorFamily } from "recoil";
import { getLanguages } from "../../utils/utils";
import { $currentLanguage } from "../atoms/atoms";




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