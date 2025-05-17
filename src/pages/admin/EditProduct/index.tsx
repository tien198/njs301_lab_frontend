import { Suspense, useCallback } from 'react'
import { Await, useLoaderData, useNavigate } from 'react-router-dom'
import type { Loader } from './loader'


import '../forms.css'
import modalStyle from '../../../components/modal/Modal.module.css'

import ProductForm from '../comps/ProductForm'
import InformModal from '../../../components/modal/InformModal'
import modalStore from '../../../components/modal/store'
import { Fallback } from '../../../components/Fallback'


export default function EditProduct() {
  const loader: Loader = useLoaderData()
  const hide = modalStore.getState().setHidden

  const navigate = useCallback(useNavigate(), [])
  const modalFnc = useCallback(() => {
    navigate('/')
    hide(modalStyle['hidden'])
  }, [])

  return (
    <main>
      <Suspense fallback={<Fallback />}>
        <Await resolve={loader.prodDefer}>{(prod) =>
          <ProductForm isEditing product={prod} />
        }</Await>
      </Suspense>
      <InformModal truthyFnc={modalFnc} falsyFnc={modalFnc} />
    </main>
  )
}


