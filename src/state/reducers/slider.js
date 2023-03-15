import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/slider';

const initialState = { index: 1 };

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.saveSliderStatus, (status, action) => {
            status.index = action.payload;
        })
});

export default reducer;
