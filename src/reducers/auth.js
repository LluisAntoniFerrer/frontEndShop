const INITIAL_STATE = {
    token:null,
    error:null
}
const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                token: action.payload.token,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default auth;