import { Await, Form, useLoaderData } from 'react-router-dom';
import type { CartLoader } from './loader';
import { Suspense } from 'react';
import { Fallback } from '../../../components/Fallback';

import { BackendUrl } from '../../../utilities/backendUrl';

import styles from './cart.module.css';
import ErrorModal from '../../../components/modal/ErrorModal';



export default function Cart() {
    const { cartDefer } = useLoaderData<CartLoader>()

    return (
        <>
            <div className={styles['cart-container']}>
                <Suspense fallback={<Fallback />}>
                    <Await resolve={cartDefer}>{cart =>
                        cart && cart.items.length > 0
                            ? <>
                                {cart.items.map((item) => (
                                    <div key={item.productRef._id} className={styles['cart-item']}>
                                        <img src={BackendUrl.base + item.productRef.imageUrl} alt={item.productRef.title} className={styles['image']} />
                                        <div className={styles['details']}>
                                            <div className={styles['title']}>{item.productRef.title}</div>
                                            <div className={styles['description']}>{item.productRef.description}</div>
                                            <div className={styles['price-quantity']}>
                                                Price: ${item.productRef.price} | Quantity: {item.quantity}
                                            </div>
                                        </div>
                                        <div><span className={styles['italic']}>Subtotal</span>: ${+item.productRef.price * +item.quantity}</div>
                                    </div>
                                ))}
                                <div className={styles['total']}>Total: ${cart.total}</div>
                            </>
                            : <div>Your cart is empty.</div>
                    }</Await>
                </Suspense>
                <Form method='post' className={styles['order-form']}>
                    <button className={styles['order-button']} >
                        Order
                    </button>
                </Form>
            </div>

            <ErrorModal />
        </>
    );
}
