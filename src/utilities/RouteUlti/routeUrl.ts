export enum shopRouteURL {
    base = '/',
    authen = 'authen/',
    login = 'login',
    signup = 'sign-up',
    logout = 'logout',
    resetPassword = 'reset-password',
    testCookie = 'test-cookie',

    products = 'products',
    product = 'product',

    admin = '/admin/',
    addProduct = 'add-product',
    editProduct = 'edit-product',
    deleteProduct = 'delete-product',

    cart = 'cart',
    addTotCart = 'add-to-cart',
    order = 'order'
}

export enum shopRouteURL_Absolute {
    base = '/',
    login = base + shopRouteURL.authen + shopRouteURL.login,
    signup = base + shopRouteURL.authen + shopRouteURL.signup,
    logout = base + shopRouteURL.authen + shopRouteURL.logout,
    resetPassword = base + shopRouteURL.authen + shopRouteURL.resetPassword,
    testCookie = base + shopRouteURL.authen + shopRouteURL.testCookie,

    products = base + shopRouteURL.products,
    product = base + shopRouteURL.product,

    admin = shopRouteURL.admin,
    adminProducts = admin + shopRouteURL.products,
    adminProduct = admin + shopRouteURL.product,
    addProduct = admin + shopRouteURL.addProduct,
    editProduct = admin + shopRouteURL.editProduct,
    deleteProduct = admin + shopRouteURL.deleteProduct,

    cart = base + shopRouteURL.cart,
    addTotCart = base + shopRouteURL.addTotCart,
    order = base + shopRouteURL.order,
}
