import axios from 'axios';

export const loginUser = (user) => async (dispatch) => {
    var completeUrl = (`http://localhost:8080/api/v1/login`);
    try {
        return await axios.post(completeUrl, user)
            .then(response => {
                dispatch({
                    type: "LOGIN_USER",
                    payload: {
                        token: response.data,
                        error: null
                    },
                })
                return true
            })
    } catch{
        return false
    }
}

export const registryUser = (user) => async (dispatch) => {
    var completeUrl = (`http://localhost:8080/api/v1/user`);
    try {
        return await axios.post(completeUrl, user)
            .then(response => {
                dispatch({
                    type: "LOGIN_USER",
                    payload: {
                        token: response.data,
                        error: null
                    },
                })
                return true
            })
    } catch{
        return false
    }
}
export const logoutUser = () => (dispatch) => {
    dispatch({
        type: "LOGIN_USER",
        payload: {
            token: null
        },
    })
}