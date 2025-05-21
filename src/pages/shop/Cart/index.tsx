import { Await, useLoaderData } from 'react-router-dom';
import type { CartLoader } from './loader';
import { Suspense } from 'react';
import { Fallback } from '../../../components/Fallback';

import styles from './cart.module.css';
import { BackendUrl } from '../../../utilities/backendUrl';


export default function Cart() {
    const { cartDefer } = useLoaderData<CartLoader>()

    const handleOrder = () => { }
    return (
        <>
            <div className={styles.cartContainer}>
                <Suspense fallback={<Fallback />}>
                    <Await resolve={cartDefer}>{cart =>
                        <>
                            {cart.items.map((item) => (
                                <div key={item.product._id} className={styles.cartItem}>
                                    <img src={BackendUrl.base + item.product.imageUrl} alt={item.product.title} className={styles.image} />
                                    <div className={styles.details}>
                                        <div className={styles.title}>{item.product.title}</div>
                                        <div className={styles.description}>{item.product.description}</div>
                                        <div className={styles.priceQuantity}>
                                            Price: ${item.product.price} | Quantity: {item.quantity}
                                        </div>
                                    </div>
                                    <div><span className={styles['italic']}>Subtotal</span>: ${+item.product.price * +item.quantity}</div>
                                </div>
                            ))}
                            <div className={styles.total}>Total: ${cart.total}</div>
                        </>
                    }</Await>
                </Suspense>
                <button className={styles['orderButton']} onClick={handleOrder}>
                    Order
                </button>
            </div>
        </>
    );
}
