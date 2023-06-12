import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userPlaceReducer from './reducers/userPlaceReducer';

// Reducers

const rootReducer = combineReducers({
    userPlace: userPlaceReducer
})

// Store

const store = configureStore({
    reducer: rootReducer
})


export default store;