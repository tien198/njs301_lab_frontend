import type { IRes } from "./interfaces/response";

export default class Res implements IRes {
    constructor(
        public message: string,
        public status?: number
    ) { }
}