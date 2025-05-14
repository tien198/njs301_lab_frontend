export enum BackendUrl {
    base = 'http://localhost:5000',
    addProduct = base + '/admin/add-product',
    editProduct = base + '/admin/edit-product',
    cart = base + '/cart',
    login = base + '/login',
    signUp = base + '/sign-up',
    createResetPassToken = base+ '/create-reset-pass-token',
    resetPass = base + '/reset-pass',
    testCookie = base + '/test-cookie',
}