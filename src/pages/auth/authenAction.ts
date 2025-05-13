import type { ActionFunctionArgs } from "react-router-dom";
import type { BackendUrl } from "../../utilities/backendUrl";
import type { IErrorRes } from "../../models/interfaces/errorRes";

import { redirect } from "react-router-dom";



export default async function authenAction(args: ActionFunctionArgs, backendAPI: BackendUrl) {
    try {
        const formData = await args.request.formData();
        const data = Object.fromEntries(formData);

        const res = await fetch(backendAPI, {
            method: args.request.method,
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });

        if (res.ok) {
            return redirect('/')
        }
        // this return errorRes object from the backend
        return res.json()

    } catch (error) {
        const errorRes = error as IErrorRes;
        console.error(error);
        alert('Something went wrong');
        return errorRes?.message || 'Something went wrong';
    }
}