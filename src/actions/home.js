import axios from 'axios';

export const getHome = () => (dispatch) => {
    var completeUrl = (`http://localhost:8080/api/v1/product/all`);
    axios.get(completeUrl)
        .then(response => {
            dispatch({
                type: "INIT_APLICATION",
                payload: {
                    products: response.data
                },
            })
        })
        .catch(error => { throw (error) })
}