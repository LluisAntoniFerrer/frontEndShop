export const addProductToCart = (product) => (dispatch) => {
    dispatch({
        type: "ADD_CART",
        payload: {
            product: product
        },
    })
}

export const showCartModal = (show) => (dispatch) => {
    dispatch({
        type: "MODAL_SHOW",
        payload: {
            show: show
        },
    })
}

export const deleteFromCart = (id) => (dispatch) => {
    dispatch({
        type: "DELETE_PRODUCT_CART",
        payload: {
            delete: id
        }
    })
}

export const deleteAllCart = () => (dispatch) => {
    dispatch({
        type: "DELETE_ALL_CART",
        payload: {
            delete: []
        }
    })
}
