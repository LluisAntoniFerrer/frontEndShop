import axios from 'axios';

export const loginUser = (user) => (dispatch) => {
    var completeUrl = (`http://localhost:8080/api/v1/login`);
    axios.post(completeUrl,user)
        .then(response => {
            console.log(response)
            dispatch({
                type: "LOGIN_USER",
                payload: {
                    token: response.data
                },
            })
        })
        .catch(error => { throw (error) })
}
export const logoutUser = () => (dispatch) => {
    dispatch({
        type: "LOGIN_USER",
        payload: {
            token: ""
        },
    })
}