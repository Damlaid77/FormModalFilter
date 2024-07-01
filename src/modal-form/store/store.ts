import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FormApi } from "../api/api";
import formReducer from '../slice/form-slice'


const rootReducer = combineReducers({
    formReducer,
    [FormApi.reducerPath]: FormApi.reducer
    
})

export const store = configureStore({
    reducer: rootReducer
    ,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false // ?
          }).concat(FormApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch