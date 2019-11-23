const INITIAL_STATE = {
    bills: null,
    lastBuy: null,
    error: null
}
const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_BILLS":
            return {
                ...state,
                bills: action.payload.bills,
                error: action.payload.error
            }
        case "BUY_PRODUCT":
            return {
                ...state,
                lastBuy: action.payload.lastBuy,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default user;