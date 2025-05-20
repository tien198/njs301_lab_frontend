
export interface ICartItem {
    product: string
    quantity: number
}

export interface ICart {
    items: ICartItem[],
    total: number
}
