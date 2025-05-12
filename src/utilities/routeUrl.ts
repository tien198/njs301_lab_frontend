export enum shopRouteURL {
    base = '/',
    authen = 'authen/',
    login = 'login',
    signup = 'sign-up',
    logout = 'logout',
    testCookie = 'test-cookie',

    admin = '/admin/',
    products = 'products',
    addProduct = 'add-product',
    editProduct = 'edit-product'
}

export enum shopRouteURL_Absolute {
    base = '/',
    login = base + shopRouteURL.authen + shopRouteURL.login,
    signup = base + shopRouteURL.authen + shopRouteURL.signup,
    logout = base + shopRouteURL.authen + shopRouteURL.logout,
    testCookie = base + shopRouteURL.authen + shopRouteURL.testCookie,



    admin = shopRouteURL.admin,
    products = admin + shopRouteURL.products,
    addProduct = admin + shopRouteURL.addProduct,
    editProduct = admin + shopRouteURL.editProduct
}
