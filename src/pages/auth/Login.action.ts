import type { ActionFunctionArgs } from "react-router-dom";
import authenAction from "./authenAction";
import { BackendUrl } from "../../utilities/backendUrl";

export async function action(args: ActionFunctionArgs) {
    return await authenAction(args, BackendUrl.login)
}