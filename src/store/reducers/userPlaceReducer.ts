import { SET_USER_PLACE } from "../actions/userPlaceActions";

const initialState = {
    userPlace: "/"
}

const userPlaceReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_PLACE:
            return {
                ...state,
                userPlace: action.payload
            }
        default:
            return state;
    }
}

export default userPlaceReducer;