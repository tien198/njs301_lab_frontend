import Product from "../../../models/Product"
import { Form } from "react-router-dom"

import '../forms.css'

type Props = { isEditing: boolean, product?: Product }

export default function AddProduct({ isEditing, product }: Props) {

  return (
    <main>
      <Form className="product-form" method="POST">
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="form-control">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" name="imageUrl" id="imageUrl" />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" step="0.01" />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" rows={5}>{isEditing ? product?.description : ''}</textarea>
        </div>

        {isEditing && <input type="hidden" name="id" value={product?.id} />}
        <button className="btn" type="submit">{isEditing ? 'Update product' : 'Add product'}</button>
      </Form>
    </main>
  )
}


