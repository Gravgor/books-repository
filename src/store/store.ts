import { configureStore , combineReducers} from '@reduxjs/toolkit';
import breadcrumbReducer from './reducers/breadcrumbReducer';
import { BreadcrumbState } from './types/breadcrumbTypes';

export interface RootState {
    breadcrumb: BreadcrumbState;
}

const rootReducer = combineReducers<RootState>({
    breadcrumb: breadcrumbReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;