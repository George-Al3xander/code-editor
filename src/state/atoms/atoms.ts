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


export const $outputPosition = atom({
    key: "output-position",
    default: "column-reverse"
})

export const $outputVisibility = atom({
    key: "output-Visibility",
    default: "visible"
})


export const $editorRef = atom<any>({
    key: "editorRef",
    default: null
})