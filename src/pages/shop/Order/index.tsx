import { Await, useLoaderData } from "react-router-dom"
import OrderItem from "./comps/OrderItem"

import styles from "./order.module.css"


import type { OrderLoader } from "./loader"
import { Suspense } from "react"
import { Fallback } from "../../../components/Fallback"
import { BackendUrl } from "../../../utilities/backendUrl"



export default function OrderList() {
    const { ordersDefer } = useLoaderData<OrderLoader>()
    return (
        <div className={styles['order-list']}>
            <Suspense fallback={<Fallback />}>
                <Await resolve={ordersDefer}>{orders =>
                    orders && orders.length > 0
                        ? orders.map(ord =>
                            <div className={styles['order-card']}>
                                <h3>Order ID: {String(ord._id)}</h3>
                                <div className={styles['order-items']}>
                                    {ord.items.map((item, i) => (
                                        <OrderItem item={item} key={i} />
                                    ))}
                                </div>
                                <div className={styles['order-item']}>
                                    <p className={styles['total']}>Total: $ {ord.total}</p>
                                    <form action={BackendUrl.getInvoice} method="post">
                                        <input type="hidden" name="orderId" value={ord._id} />
                                        <button type="submit" className={styles['submit-btn']}>Get Invoice</button>
                                    </form>
                                </div>
                            </div>)
                        : <p>No Products Found!</p>
                }</Await>
            </Suspense>

        </div>
    )
}
