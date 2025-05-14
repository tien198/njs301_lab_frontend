import { Form } from "react-router-dom"

type Props = {
    prodId: string,
    price: number
}

export default function AddToCart({ prodId, price }: Props) {
    return (
        <Form action="/cart" method="post">
            <button className="btn">Add to cart</button>
            <input type="hidden" name="prodId" value={prodId} />
            <input type="hidden" name="price" value={price} />
        </Form>
    )
}

