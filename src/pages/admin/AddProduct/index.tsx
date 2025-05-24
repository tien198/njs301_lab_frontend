import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


import modalStyle from '../../../components/modal/Modal.module.css'

import ProductForm from '../comps/ProductForm'
import InformModal from '../../../components/modal/InformModal'
import modalStore from '../../../components/modal/store'
import { useStore } from 'zustand'
import ErrorModal from '../../../components/modal/ErrorModal'
import { shopRouteURL_Absolute } from '../../../utilities/RouteUlti/routeUrl'



export default function AddProduct() {
  const hide = useStore(modalStore, state => state.setHidden)
  const navigate = useCallback(useNavigate(), [])
  const modalFnc = useCallback(() => {
    navigate(shopRouteURL_Absolute.adminProducts)
    hide(modalStyle['hidden'])
  }, [hide])

  return (
    <main>

      <ProductForm />
      <InformModal truthyFnc={modalFnc} falsyFnc={modalFnc} />
      <ErrorModal />
    </main>
  )
}


