



export type PistonRuntime = {
    language: string,
    version: string
}


export type LangugeMap = {[key: string]: string}


export type ExecuteResponse = PistonRuntime & {
    run: {
        stdout: string,
        stderr: string,
        code: number,
        signal: unknown,
        output: string
    }
}