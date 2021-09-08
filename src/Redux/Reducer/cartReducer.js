import {actionTypes} from '../actions/actionTypes'
const INITIAL_STATE = {
    cart: [],
    // count: 0
  }
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART:
            return {
                ...state,
                cart: action.payload,
                // count: state.count + 1
            }
        case actionTypes.UPDATE_COUNT: 
        // return;
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state;
    }
}

export {cartReducer}