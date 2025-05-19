import type { ActionFunctionArgs } from "react-router-dom";
import type { BackendUrl } from "../backendUrl";
import type ErrorRes from "../../models/ErrorResponse";

import { redirect } from "react-router-dom";


/**
 * @param {ActionFunctionArgs} args - 
 * @param {BackendUrl} backendAPI - 
 * @param {Function(resJson)} actionInDone - action-in-done
 */
export default async function routerActionURLSearchParams<T extends object>(args: ActionFunctionArgs, backendAPI: BackendUrl, actionInDone?: (resJson: ErrorRes<T>) => void) {
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
        if (res.ok) {
            return actionInDone ? actionInDone(resJson) : redirect('/')
        }
        // this return errorRes object from the backend
        return resJson

    } catch (error: any) {
        // ErrorRes;
        console.error(error);
        alert('Something went wrong');
        return error
    }
}