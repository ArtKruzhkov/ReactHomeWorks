import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/productsReducer";

const productsStore = configureStore({
    reducer: {
        products: productsReducer
    }
});

export default productsStore;