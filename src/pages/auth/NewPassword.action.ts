import type { LoaderFunctionArgs } from "react-router-dom";
import { BackendUrl } from "../../utilities/backendUrl";

export async function action(args: LoaderFunctionArgs) {
    try {
        const token = args.params['token']

        const res = await fetch(BackendUrl.resetPass)
    } catch (error) {
        console.error(error)
    }
}