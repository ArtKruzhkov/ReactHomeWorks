import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducers/tasksSlice"

const storeHW7 = configureStore({
    reducer: {
        tasks: taskReducer
    }
})
export default storeHW7;