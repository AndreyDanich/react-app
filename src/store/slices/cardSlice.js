import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        getIdMovie: (state, { payload: movie }) => {
            if (state.some(v => v.id === movie.id)) {
                return
            }
            state.splice(0, 1, movie)
        }
    }
})

export const {actions, reducer} = cardSlice