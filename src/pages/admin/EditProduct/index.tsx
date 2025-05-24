import { Suspense, useCallback } from 'react'
import { Await, useLoaderData, useNavigate } from 'react-router-dom'
import type { EditLoader } from './loader'

import modalStyle from '../../../components/modal/Modal.module.css'

import ProductForm from '../comps/ProductForm'
import InformModal from '../../../components/modal/InformModal'
import modalStore from '../../../components/modal/store'
import { Fallback } from '../../../components/Fallback'
import { useStore } from 'zustand'
import { shopRouteURL_Absolute } from '../../../utilities/RouteUlti/routeUrl'
import ErrorModal from '../../../components/modal/ErrorModal'


export default function EditProduct() {
  const loader: EditLoader = useLoaderData()
  const hide = useStore(modalStore, state => state.setHidden)

  const navigate = useCallback(useNavigate(), [])
  const modalFnc = useCallback(() => {
    navigate(shopRouteURL_Absolute.adminProducts)
    hide(modalStyle['hidden'])
  }, [])

  return (
    <main>
      <Suspense fallback={<Fallback />}>
        <Await resolve={loader.prodDefer}>{(prod) =>
          <ProductForm isEditing product={prod} />
        }</Await>
      </Suspense>
      <ErrorModal />
      <InformModal truthyFnc={modalFnc} falsyFnc={modalFnc} />
    </main>
  )
}


