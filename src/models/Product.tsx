import type { IProduct } from './interfaces/base/IProduct'

export default class Product implements IProduct {
    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public price: number,
        public _id: string,
        public userRef: string
    ) { }
}