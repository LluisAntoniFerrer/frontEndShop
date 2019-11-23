const INITIAL_STATE = {
    products: null,
    productsTypes:null,
    pages:0
}
const init = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SEARCH_TYPES":
            return {
                ...state,
                productsTypes: action.payload.productsTypes,
            }
        case "SEARCH_BESTSELLERS":
            return {
                ...state,
                products: action.payload.products,
                pages:  action.payload.pages
            }
        default:
            return state;
    }
}

export default init;