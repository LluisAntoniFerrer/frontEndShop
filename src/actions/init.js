import axios from 'axios';
const URL = "http://localhost:8080/api/v1/product"

export const getTypes = () => (dispatch) => {
    axios.get(URL + `/types`)
        .then(response => {
            dispatch({
                type: "SEARCH_TYPES",
                payload: {
                    productsTypes: response.data
                },
            })
        })
        .catch(error => { throw (error) })
}
export const getBestSeller = (page = 0) => (dispatch) => {
    axios.get(URL + `/bestseller?page=${page}`)
        .then(response => {
            dispatch({
                type: "SEARCH_BESTSELLERS",
                payload: {
                    products: response.data.content,
                    pages: response.data.totalPages
                },
            })
        })
        .catch(error => { throw (error) })
}

export const insertRecommended = (product) => (dispatch) => {
    console.log(product)
    dispatch({
        type: "INSERT_RECOMMENDED",
        payload: {
            recommended: product
        }
    })
}