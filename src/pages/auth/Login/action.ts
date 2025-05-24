import { redirect, type ActionFunctionArgs } from "react-router-dom";
import routeAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";
import { BackendUrl } from "../../../utilities/backendUrl";
import type Res from "../../../models/Response";
import authenStore, { type AuthenInfor } from "../../../store/authenStore";

export async function action(args: ActionFunctionArgs) {
    const setAuthen = authenStore.getState().setAuthenInfor

    const actionInDone = (jsonRes: Res<AuthenInfor>) => {
        setAuthen(jsonRes.infor!)
        return redirect('/')
    }

    return await routeAction_URLSearchParams(args, BackendUrl.login, actionInDone)
}