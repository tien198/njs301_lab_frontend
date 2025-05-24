import { Link } from "react-router-dom"
import type { IOrderItem } from "../../../../models/interfaces/base/IOrder"
import { BackendUrl } from "../../../../utilities/backendUrl"

import styles from "../order.module.css"
import { shopRouteURL_Absolute } from "../../../../utilities/RouteUlti/routeUrl"

type props = {
    item: IOrderItem
}

export default function OrderItem({ item }: props) {
    return (
        <div className={styles['order-item']}>
        <Link to={shopRouteURL_Absolute.product + '/' + item.product?._id}>
            <div className={styles['order-item']}>

                <img src={BackendUrl.base + item.product?.imageUrl} alt={item.product?.title} />
                <div>
                    <h4>{item.product?.title}</h4>
                    <p>Price: ${item.product?.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            </div>
        </Link>

        </div>
    )
}
