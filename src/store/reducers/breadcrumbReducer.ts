import { BreadcrumbState, BreadcrumbAction, SET_BREADCRUMB } from "../types/breadcrumbTypes";

const initialState: BreadcrumbState = {
    breadcrumbs: [],
}

const breadcrumbReducer = (state = initialState, action: BreadcrumbAction): BreadcrumbState => {
    switch (action.type) {
        case SET_BREADCRUMB:
            return {
                ...state,
                breadcrumbs: action.payload,
            }
        default:
            return state;
    }
}

export default breadcrumbReducer;
