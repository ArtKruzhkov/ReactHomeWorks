import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasks from '../data/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 3000);
    });
});

// export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
//     throw new Error('Failed to fetch tasks');
// });


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default tasksSlice.reducer;
