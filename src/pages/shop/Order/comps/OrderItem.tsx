import type { IOrderItem } from "../../../../models/interfaces/base/IOrder"

import styles from "../order.module.css"

type props = {
    item: IOrderItem
}

export default function OrderItem({ item }: props) {
    return (
        <div className={styles['order-item']}>
            <img src={item.product?.imageUrl} alt={item.product?.title} />
            <div>
                <h4>{item.product?.title}</h4>
                <p>Price: ${item.product?.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
        </div>
    )
}
