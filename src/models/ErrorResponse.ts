import type { IRes } from "./interfaces/response";



export default class ErrorRes<T extends object = object> extends Error implements IRes {
    constructor(
        message: string,
        public status?: number,
        public cause?: T
    ) {
        super(message)
    }
}