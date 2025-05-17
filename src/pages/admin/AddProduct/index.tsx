import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


import modalStyle from '../../../components/modal/Modal.module.css'

import ProductForm from '../comps/ProductForm'
import InformModal from '../../../components/modal/InformModal'
import modalStore from '../../../components/modal/store'



export default function AddProduct() {
  const hide = modalStore.getState().setHidden
  const navigate = useCallback(useNavigate(), [])
  const modalFnc = useCallback(() => {
    navigate('/')
    hide(modalStyle['hidden'])
  }, [])

  return (
    <main>

      <ProductForm />
      <InformModal truthyFnc={modalFnc} falsyFnc={modalFnc} />
    </main>
  )
}


