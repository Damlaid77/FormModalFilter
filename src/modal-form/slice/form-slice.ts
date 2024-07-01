import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormModal, defaultValues, valueFormModel } from "../use-form-schema";

// const initialState = {
//     defaultValues
// }

export const FormSlice = createSlice({
    name: 'formSlice',
    initialState: defaultValues,
    reducers: {
        applyFiltersForm: (state, action: PayloadAction<FormModal>) => {

            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate
            state.startMoneyRange = action.payload.startMoneyRange
            state.endMoneyRange = action.payload.endMoneyRange
            // state.defaultValues = action.payload
            // где запрос на сервер делать?
            
        },
        updateFilterForm: (state, action: PayloadAction<valueFormModel>) => {
            // state['endDate'] = action.payload[0]
            // const x: valueFormModel = action.payload[0]
            state[action.payload] = null
        }
    }
})

export const {applyFiltersForm, updateFilterForm} = FormSlice.actions
export default FormSlice.reducer