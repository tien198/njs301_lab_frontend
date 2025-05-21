
export async function routeLoader(backendAPI: string) {

        const res = await fetch(backendAPI, {
            credentials: 'include'
        })
        if (!res.ok)
            throw await res.json()

        return res.json()
}