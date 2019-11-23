import axios from 'axios';

export const getBills = (token) => (dispatch) => {
    var completeUrl = (`http://localhost:8080/api/v1/bill`);
    axios.get(completeUrl,{ headers: { Authorization: token } })
        .then(response => {
            dispatch({
                type: "GET_BILLS",
                payload: {
                    bills: response.data.bills,
                    error: null
                },
            })
        })
        .catch(error => { 
            dispatch({
                type: "GET_BILLS",
                payload: {
                    bills: null,
                    error: error
                },
            })
        })
}
export const buyProduct = (token,product) => (dispatch) => {
    var completeUrl = (`http://localhost:8080/api/v1/bill/buy/${product}`);
    axios.get(completeUrl,{ headers: { Authorization: token } })
        .then(response => {
            console.log(response)
            dispatch({
                type: "BUY_PRODUCT",
                payload: {
                    lastBuy: response.data.products_stock,
                    error: null
                },
            })
        })
        .catch(error => { 
            dispatch({
                type: "BUY_PRODUCT",
                payload: {
                    bills: null,
                    error: error
                },
            })
        })
}