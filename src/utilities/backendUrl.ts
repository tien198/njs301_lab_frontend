export enum BackendUrl {
    base = 'http://localhost:5000/',

    login = base + 'login/',
    signUp = base + 'sign-up/',
    createResetPassToken = base + 'create-reset-pass-token/',
    resetPass = base + 'reset-pass/',
    testCookie = base + 'test-cookie/',

    products = 'products/',
    product = 'product/',

    cart = base + 'cart/',
    addToCart = base + 'add-to-cart/',

    order = base + 'orders',
    addOrder = base + 'add-order',

    admin = 'admin/',
    adminProducts = base + admin + products,
    adminProduct = base + admin + product,
    addProduct = base + admin + 'add-product/',
    editProduct = base + admin + 'edit-product/',
    deleteProduct = base + admin + 'delete-product/',

}