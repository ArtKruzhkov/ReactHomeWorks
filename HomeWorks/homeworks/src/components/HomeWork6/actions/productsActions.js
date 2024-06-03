export const ADD_PRODUCT = 'ADD_PRODUCT';
export const TOGGLE_AVAILABLE = 'TOGGLE_AVAILABLE';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: { name: product.name, description: product.description, price: product.price }
});

export const toggleAvailable = (id) => ({
    type: TOGGLE_AVAILABLE,
    payload: { id }
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: { id }
});

export const editProduct = (product) => ({
    type: EDIT_PRODUCT,
    payload: product
});