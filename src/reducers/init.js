const INITIAL_STATE = {
    products: null,
    recommended: [],
    productsTypes: null,
    pages: 0
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
                pages: action.payload.pages
            }
        case "INSERT_RECOMMENDED":
            let inArray = false;
            state.recommended.map((product) => {
                if (action.payload.recommended.id === product.id) {
                    return inArray = true;
                }
                return ""
            })
            if (!inArray) {
                if (state.recommended.length === 5) {
                    state.recommended.shift()
                }
                return {
                    ...state,
                    recommended: [...state.recommended, action.payload.recommended]
                }
            }
            return {
                ...state,
                recommended: [...state.recommended]
            }
        default:
            return state;
    }
}

export default init;