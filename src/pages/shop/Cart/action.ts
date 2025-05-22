import type ErrorRes from "../../../models/ErrorResponse";


import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { BackendUrl } from "../../../utilities/backendUrl";
import modalStore from "../../../components/modal/store";
import { shopRouteURL } from "../../../utilities/RouteUlti/routeUrl";



export async function action(args: ActionFunctionArgs) {
    const showModal = modalStore.getState().show
    const setResponse = modalStore.getState().setResponse
    const setType = modalStore.getState().setType


    const actionInDone = () => {
        return redirect('/' + shopRouteURL.order)
    }

    const actionInFailed = (resJson: ErrorRes) => {
        setType('error')
        setResponse({
            message: resJson.message,
            status: resJson.status,
            name: resJson.name,
            cause: resJson.cause
        })
        showModal()
    }

    try {
        const formData: FormData = await args.request.formData()
        const res = await fetch(BackendUrl.addOrder, {
            method: args.request.method,
            credentials: 'include',
            // pass URLSearchParams to body to manually set headers - in hear: content-type: 'application/x-www-form-urlencoded'
            body: new URLSearchParams(formData as any),
            headers: args.request.headers,
        });
        const blob = await res.blob()
        let filename: string = 'undefined-file-name.pdf'
        const contentDisposition = res.headers.get('content-disposition')
        if (contentDisposition && contentDisposition.includes('filename=')) {
            const matches = contentDisposition.match(/filename="?(.+?)"?$/);
            if (matches && matches[1])
                filename = matches[1]
        }


        if (res.ok) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.target = 'blank'
            link.href = url
            link.download = filename
            link.click()
            link.remove()

            return actionInDone()
        }

        // this return errorRes object from the backend
        return actionInFailed({
            message: 'fail',
            status: 404,
            name: 'error'
        })

    } catch (error: any) {
        // ErrorRes;
        console.error(error);
        alert('Something went wrong');
        return error
    }
    // return routerAction_URLSearchParams(args, BackendUrl.addOrder, actionInDone, actionInFailed)
}