import type Product from "../../../models/Product"
import type IProdError from "../../../models/interfaces/response/error/productError"
import type ErrorRes from "../../../models/ErrorResponse"

import { Form, useActionData } from "react-router-dom"
import ErrorMsg from "../../../components/layouts/ErrorMsg"

import style from './forms.module.css'



type Props = { isEditing?: boolean, product?: Product }


export default function ProductForm({ isEditing, product }: Props) {
    const actionData: ErrorRes<IProdError> | undefined = useActionData()

    return (
        <Form className={style['product-form']} method='POST' encType="multipart/form-data" noValidate>
            <div className={style['form-control']}>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' id='title' defaultValue={product?.title} />
                {actionData?.cause?.title && <ErrorMsg msg={actionData?.cause?.title} />}
            </div>

            {/* <div className={style['form-control']}>
                <label htmlFor='imageUrl'>Image URL</label>
                <input type='text' name='imageUrl' id='imageUrl' defaultValue={product?.imageUrl} />
                {actionData?.cause?.imageUrl && <ErrorMsg msg={actionData?.cause?.imageUrl} />}
            </div> */}

            <div className={style['form-control']}>
                <label htmlFor='image'>Image</label>
                <input type='file' name='image' id='image' />
                {actionData?.cause?.image && <ErrorMsg msg={actionData?.cause?.image} />}

            </div>

            <div className={style['form-control']}>
                <label htmlFor='price'>Price</label>
                <input type='number' name='price' id='price' step='0.01' defaultValue={product?.price} />
                {actionData?.cause?.price && <ErrorMsg msg={actionData?.cause?.price} />}
            </div>

            <div className={style['form-control']}>
                <label htmlFor='description'>Description</label>
                <textarea name='description' id='description' rows={5} defaultValue={product?.description} />
                {actionData?.cause?.description && <ErrorMsg msg={actionData?.cause?.description} />}
            </div>

            {isEditing && <input type='hidden' name='prodId' defaultValue={product?._id} />}
            <button className='btn' type='submit'>{isEditing ? 'Update product' : 'Add product'}</button>
        </Form>
    )
}