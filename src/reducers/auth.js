const INITIAL_STATE = {
    token:""
}
const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                token: action.payload.token
            }
        default:
            return state;
    }
}

export default auth;