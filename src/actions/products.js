import axios from 'axios';
const URL = "http://localhost:8080/api/v1/product"

export const getProductsByType = (type,page = 0) => (dispatch) => {
    axios.get(URL+`/type/${type}?page=${page}`)
        .then(response => {
            dispatch({
                type: "SEARCH_PRODUCTS",
                payload: {
                    products: response.data.content,
                    pages: response.data.totalPages
                },
            })
        })
        .catch(error => { throw (error) })
}
export const getProduct = (id) => (dispatch) => {
    axios.get(URL+`/${id}`)
        .then(response => {
            dispatch({
                type: "SEARCH_PRODUCT",
                payload: {
                    product: response.data
                },
            })
        })
        .catch(error => { throw (error) })
}
export const searchProducts = (search,page = 0) => (dispatch) => {
    axios.get(URL+`/search/${search}?page=${page}`)
        .then(response => {
            dispatch({
                type: "SEARCH_PRODUCTS",
                payload: {
                    products: response.data.content,
                    pages: response.data.totalPages
                },
            })
        })
        .catch(error => { throw (error) })
}
export const changeStock = (stock) => (dispatch) => {
    dispatch({
        type: "CHANGE_STOCK",
        payload: {
            productStock: stock
        },
    })
}