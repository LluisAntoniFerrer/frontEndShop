const INITIAL_STATE = {
    products: null,
    product: null,
    productStock: null,
    pages: 0
}
const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SEARCH_PRODUCTS":
            return {
                ...state,
                products: action.payload.products,
                pages: action.payload.pages
            }
        case "SEARCH_PRODUCT":
            return {
                ...state,
                product: action.payload.product,
                productStock: null
            }
        case "CHANGE_STOCK":
            return {
                ...state,
                productStock: action.payload.productStock
            }
        default:
            return state;
    }
}

export default products;