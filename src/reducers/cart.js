const INITIAL_STATE = {
    cart: [],
    showCart: false,
    bill: null

}
const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload.product]
            }
        case "BUY_CART":
            return {
                ...state,
                bill: action.payload.bill
            }
        case "MODAL_SHOW":
            return {
                ...state,
                showCart: action.payload.show
            }
        case "DELETE_PRODUCT_CART":
            return {
                ...state,
                cart: state.cart.filter((obj, index) => { return action.payload.delete !== obj.id })
            }
            case "DELETE_ALL_CART":
                return {
                    ...state,
                    cart:action.payload.delete
                }
        default:
            return state;
    }
}

export default cart;