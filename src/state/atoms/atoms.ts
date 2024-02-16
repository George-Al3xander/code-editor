import { atom } from "recoil";
import { $langInitialSelector } from "../selectors/selectors";




export const $languages = atom({
    key: "languages",
    default: $langInitialSelector
})

export const $currentLanguage = atom({
    key: "CurrentLanguage",
    default: "javascript"
})