import { configureStore } from '@reduxjs/toolkit';

const InitialState = {
    theme: 'light'
};

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'TOOGLE_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: reducer
});

export default store;