import type { ActionFunctionArgs } from "react-router-dom";
import type { BackendUrl } from "../backendUrl";
import type ErrorRes from "../../models/ErrorResponse";

import { redirect } from "react-router-dom";


/**
 * @param {ActionFunctionArgs} args - 
 * @param {BackendUrl} backendAPI - 
 * @param {object | string} bodyData - body in post reqest - will be stringfy to json before request was sent
 * @param {Function(resJson)} actionInDone - action-in-done
 */
export default async function routerAction<T extends object>(args: ActionFunctionArgs, backendAPI: BackendUrl, bodyData: string | object, actionInDone?: (resJson: ErrorRes<T>) => void) {
    try {
        const res = await fetch(backendAPI, {
            method: args.request.method,
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
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