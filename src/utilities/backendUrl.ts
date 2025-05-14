export enum BackendUrl {
    baseUrl = 'http://localhost:5000',
    addProduct = baseUrl + '/admin/add-product',
    editProduct = baseUrl + '/admin/edit-product',
    cart = baseUrl + '/cart',
    login = baseUrl + '/login',
    signUp = baseUrl + '/sign-up',
    resetPass = baseUrl + '/reset-pass',
    createNewPass = '/create-new-pass',
    testCookie = baseUrl + '/test-cookie',
}