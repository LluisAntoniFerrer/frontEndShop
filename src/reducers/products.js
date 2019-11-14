const INITIAL_STATE = {
    products: [
        {
            id:1,
            image: "https://images-na.ssl-images-amazon.com/images/I/41BY0%2BbChwL._AC_SY400_.jpg",
            name: "aaaa",
            price: "300,15"
        },
        {
            id:2,
            image: "https://images-na.ssl-images-amazon.com/images/I/41BY0%2BbChwL._AC_SY400_.jpg",
            name: "vvvvvv",
            price: "300,15"
        },
        {
            id:3,
            image: "https://images-na.ssl-images-amazon.com/images/I/41BY0%2BbChwL._AC_SY400_.jpg",
            name: "ccccccccccc",
            price: "300,15"
        }
    ]
}
const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SEARCH_PRODUCTS":
            return {
                ...state,
                products: action.payload.products,
            }
        default:
            return state;
    }
}

export default products;