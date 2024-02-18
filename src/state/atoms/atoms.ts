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

export const $outputVisibility = atom<"initial" | "none">({
    key: "output-Visibility",
    default: "initial"
})


export const $output = atom<string[] | null>({
    key: "output",
    default: null
})