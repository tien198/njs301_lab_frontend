import { Await, Link, useLoaderData } from "react-router-dom"
import OrderItem from "./comps/OrderItem"

import styles from "./order.module.css"


import type { OrderLoader } from "./loader"
import { Suspense } from "react"
import { Fallback } from "../../../components/Fallback"
import { shopRouteURL_Absolute } from "../../../utilities/RouteUlti/routeUrl"



export default function OrderList() {
    const { ordersDefer } = useLoaderData<OrderLoader>()
    return (
        <div className={styles['order-list']}>
            <Suspense fallback={<Fallback />}>
                <Await resolve={ordersDefer}>{orders =>
                    orders && orders.length > 0
                        ? orders.map(ord => <div className={styles['order-card']}>
                            <h3>Order ID: {String(ord._id)}</h3>
                            <div className={styles['order-items']}>
                                {ord.items.map((item, i) => (
                                    <Link key={i} to={shopRouteURL_Absolute.product + '/' + item.product._id}>
                                        <OrderItem item={item} />
                                    </Link>
                                ))}
                            </div>
                            <p className={styles['total']}>Total: $ {ord.total}</p>
                        </div>)
                        : <p>No Products Found!</p>
                }</Await>
            </Suspense>

        </div>
    )
}
