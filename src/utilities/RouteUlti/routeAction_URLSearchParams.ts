import type { ActionFunctionArgs } from "react-router-dom";
import type { BackendUrl } from "../backendUrl";
import type Res from "../../models/Response";
import type ErrorRes from "../../models/ErrorResponse";

import { redirect } from "react-router-dom";


/**
 * @param args - 
 * @param backendAPI - 
 * @param actionInDone - action-in-done
 * @param actionInFailed - action-in-failed
 */
export default async function routerAction_URLSearchParams<T extends object>(args: ActionFunctionArgs, backendAPI: BackendUrl, actionInDone?: (resJson: Res<T>) => void, actionInFailed?: (resJson: ErrorRes<T>) => void) {
    try {
        const formData: FormData = await args.request.formData()
        const res = await fetch(backendAPI, {
            method: args.request.method,
            credentials: 'include',
            // pass URLSearchParams to body to manually set headers - in hear: content-type: 'application/x-www-form-urlencoded'
            body: new URLSearchParams(formData as any),
            headers: args.request.headers,
        });
        const resJson = await res.json()
        resJson.status = resJson.status ?? res.status
        if (res.ok)
            return actionInDone ? actionInDone(resJson) : redirect('/')

        // this return errorRes object from the backend
        return actionInFailed ? actionInFailed(resJson) : resJson

    } catch (error: any) {
        // ErrorRes;
        console.error(error);
        alert('Something went wrong');
        return error
    }
}