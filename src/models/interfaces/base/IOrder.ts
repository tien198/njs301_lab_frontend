import type { IProduct } from "./IProduct"



export interface IOrderItem {
    product: IProduct
    quantity: number
}

export interface IOrder {
    _id: string
    items: IOrderItem[]
    total: number
    userRef: string
}
