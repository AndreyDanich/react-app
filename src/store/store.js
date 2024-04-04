import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { reducer as movieReducer } from './slices/cardSlice'

const reducers = combineReducers({
    movie: movieReducer
})

export const store = configureStore({
    reducer: reducers
})
