import { BASE_URL } from "../conts";
import { ExecuteResponse, PistonRuntime } from "../types/types";



export const getRuntimes = async () => {
    const response = await fetch(`${BASE_URL}/runtimes`);
    const data = await response.json() as PistonRuntime[];
    return data
}

export const executeCode = async ({currLanguage:{language,version},sourceCode}:{currLanguage:PistonRuntime, sourceCode: string}) => {
    const response = await fetch(`${BASE_URL}/execute`, {
        method: "POST",
        headers:   {"Content-Type": "application/json"},
        body: JSON.stringify({
            language,
            version,
            files: [
                {
                    content: sourceCode
                }
            ]

        })
    })
    const data = await response.json() as ExecuteResponse
    return data 
}