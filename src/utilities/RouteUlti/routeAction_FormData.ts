import type { ActionFunctionArgs } from "react-router-dom";
import type { BackendUrl } from "../backendUrl";
import type ErrorRes from "../../models/ErrorResponse";

import { redirect } from "react-router-dom";


/**
 * @param {ActionFunctionArgs} args - 
 * @param {BackendUrl} backendAPI - 
 * @param {Function(resJson)} actionInDone - action-in-done
 */
export default async function routerAction_FormData<T extends object>(args: ActionFunctionArgs, backendAPI: BackendUrl, actionInDone?: (resJson: ErrorRes<T>) => void) {
    try {
        const res = await fetch(backendAPI, {
            method: args.request.method,
            credentials: 'include',
            // browser FormData submition will auto set content-type = "multipart/form-data"
            body: await args.request.formData()
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