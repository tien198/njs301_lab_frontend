import type Product from "../models/Product"
import AddToCart from "../pages/shop/AddToCart"
import { BackendUrl } from "../utilities/backendUrl"

import style from './product.module.css'

type Props = { product: Product, isAdmin?: boolean }

export default function ProductComp({ product, isAdmin }: Props) {
    return (
        <article className={`card ${style['product-item']}`}>
            <header className="card__header">
                <h1 className={style['product__title']}>{product.title}</h1>
            </header>
            <div className="card__image">
                <img src={BackendUrl.base + product.imageUrl} alt={product.title} />
            </div>
            <div className="card__content">
                <h2 className={style['product__price']}>${product.price}</h2>
                <p className={style['product__description']}>{product.description}</p>
            </div>
            {
                !isAdmin && (
                    <div className="card__actions">
                        <AddToCart prodId={product._id} price={product.price} />
                    </div>)
            }
        </article>
    )
}
