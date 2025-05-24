import { type PropsWithChildren } from "react"
import type Product from "../models/Product"
import { BackendUrl } from "../utilities/backendUrl"

import style from './product.module.css'
import { Link } from "react-router-dom"
import { shopRouteURL_Absolute } from "../utilities/RouteUlti/routeUrl"

interface Props extends PropsWithChildren { product: Product }

export default function ProductComp({ product, children }: Props) {
    return (
        <article className={`card ${style['product-item']}`}>
            <Link to={shopRouteURL_Absolute.editProduct + '/' + product._id} className='product-link'>
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
            </Link>
            <div className="card__actions">
                {children}
            </div>
        </article>

    )
}
