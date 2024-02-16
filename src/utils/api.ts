import { PistonRuntime } from "../types/types";

const BASE_URL = "https://emkc.org/api/v2/piston"


export const getRuntimes = async () => {
    const response = await fetch(`${BASE_URL}/runtimes`);
    const data = await response.json() as PistonRuntime[];
    return data
}