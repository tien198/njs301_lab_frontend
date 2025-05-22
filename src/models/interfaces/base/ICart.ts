import type { IProduct } from "./IProduct"

export interface ICartItem {
    productRef: IProduct
    quantity: number
}

export interface ICart {
    items: ICartItem[],
    total: number
}
