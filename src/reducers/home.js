const INITIAL_STATE = {
    products: [
    ],
    state:"0",
    session:""
}
const home = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "INIT_APLICATION":
            return {
                ...state,
                products: action.payload.products,
                state:"1"
            }
        default:
            return state;
    }
}

export default home;