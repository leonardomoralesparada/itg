import { createAction } from '@reduxjs/toolkit';
import types from '../types/slider';

export const saveSliderStatus = createAction(types.SAVE_SLIDER_STATUS);

export default {
    saveSliderStatus,
};