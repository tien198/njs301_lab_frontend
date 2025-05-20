import type { ActionFunctionArgs } from "react-router-dom";
import type { BackendUrl } from "../backendUrl";
import type ErrorRes from "../../models/ErrorResponse";

import { redirect } from "react-router-dom";
import type Res from "../../models/Response";


/**
 * @param args - 
 * @param backendAPI - 
 * @param actionInDone - action-in-done
 * @param actionInFailed - action-in-failed
 */
export default async function routerAction_FormData<T extends object>(args: ActionFunctionArgs, backendAPI: BackendUrl, actionInDone?: (resJson: Res<T>) => void, actionInFailed?: (resJson: ErrorRes<T>) => void) {
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
        return actionInFailed ? actionInFailed(resJson) : resJson

    } catch (error: any) {
        // ErrorRes;
        console.error(error);
        alert('Something went wrong');
        return error
    }
}