import { ADD_PRODUCT, TOGGLE_AVAILABLE, DELETE_PRODUCT, EDIT_PRODUCT } from "../actions/productsActions";

const initialState = {
    products: [
        { id: 1, name: 'Product 1', description: 'Description 1', price: 100, available: true },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 200, available: false },
        { id: 3, name: 'Product 3', description: 'Description 3', price: 300, available: true },
        { id: 4, name: 'Product 4', description: 'Description 4', price: 400, available: true }
    ]
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            const newProduct = {
                id: Date.now(),
                name: action.payload.name,
                description: action.payload.description,
                price: action.payload.price,
                available: true
            };
            return {
                ...state,
                products: [...state.products, newProduct]
            };
        case TOGGLE_AVAILABLE:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? { ...product, available: !product.available } : product)
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id)
            };
        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                )
            };
        default:
            return state;
    }
}

export default productsReducer;