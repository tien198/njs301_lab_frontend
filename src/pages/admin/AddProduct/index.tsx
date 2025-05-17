import { useCallback } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'

import Product from '../../../models/Product'

import '../forms.css'
import modalStyle from '../../../components/modal/Modal.module.css'

import type { IErrorRes } from '../../../models/interfaces/response/error'
import type IProdError from '../../../models/interfaces/response/error/productError'
import ErrorMsg from '../../../components/layouts/ErrorMsg'
import InformModal from '../../../components/modal/InformModal'
import modalStore from '../../../components/modal/store'

type Props = { isEditing: boolean, product?: Product }

export default function AddProduct({ isEditing, product }: Props) {
  const actionData: IErrorRes<IProdError> | undefined = useActionData()
  const hide = modalStore.getState().setHidden

  const navigate = useCallback(useNavigate(), [])
  const modalFnc = useCallback(() => {
    navigate('/')
    hide(modalStyle['hidden'])
  }, [])

  return (
    <main>
      <Form className='product-form' method='POST'>
        <div className='form-control'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' id='title' />
          {actionData?.cause?.title && <ErrorMsg msg={actionData?.cause?.title} />}
        </div>

        <div className='form-control'>
          <label htmlFor='imageUrl'>Image URL</label>
          <input type='text' name='imageUrl' id='imageUrl' />
          {actionData?.cause?.imageUrl && <ErrorMsg msg={actionData?.cause?.imageUrl} />}
        </div>

        <div className='form-control'>
          <label htmlFor='price'>Price</label>
          <input type='number' name='price' id='price' step='0.01' />
          {actionData?.cause?.price && <ErrorMsg msg={actionData?.cause?.price} />}
        </div>

        <div className='form-control'>
          <label htmlFor='description'>Description</label>
          <textarea name='description' id='description' rows={5} defaultValue={isEditing ? product?.description : ''} />
          {actionData?.cause?.description && <ErrorMsg msg={actionData?.cause?.description} />}
        </div>

        {isEditing && <input type='hidden' name='id' value={product?.id} />}
        <button className='btn' type='submit'>{isEditing ? 'Update product' : 'Add product'}</button>
      </Form>

      <InformModal truthyFnc={modalFnc} falsyFnc={modalFnc} />
    </main>
  )
}


