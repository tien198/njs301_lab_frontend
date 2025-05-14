import type { LoaderFunctionArgs } from "react-router-dom";
import { BackendUrl } from "../../../utilities/backendUrl";
import routerAction from "../../../utilities/RouteUlti/routeAction";

export async function action(args: LoaderFunctionArgs) {
    const formData = await args.request.formData()
    const data = Object.fromEntries(formData) 

    return await routerAction(args, BackendUrl.resetPass, data!)
}