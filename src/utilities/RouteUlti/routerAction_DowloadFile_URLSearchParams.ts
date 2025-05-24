import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { BackendUrl } from "../backendUrl";
import type ErrorRes from "../../models/ErrorResponse";





export default async function routeAction_DownloadFile_URLSearchParams<T extends object>(args: ActionFunctionArgs, backendAPI: BackendUrl, actionInDone?: () => void, actionInFailed?: (resJson: ErrorRes<T>) => void) {
    try {
        const formData: FormData = await args.request.formData()
        const res = await fetch(backendAPI, {
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
            console.log(blob.type)

            return actionInDone ? actionInDone() : redirect('/')
        }

        // this return errorRes object from the backend
        return actionInFailed ? actionInFailed(await res.json()) : await res.json()

    } catch (error: any) {
        // ErrorRes;
        console.error(error);
        alert('Something went wrong');
        return error
    }
}