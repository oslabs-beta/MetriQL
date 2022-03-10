// here we create the reducer function, like in redux
// we import our actions as variables to avoid bugs from mispelling
import { LOGIN, LOGOUT } from './global-actions'

const globalReducer = (state, action) => {
    switch(action.type) {
        case LOGIN: 
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username,
                password: action.payload.password
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                password: ''
            }
        default:
            return state;
        }
}

export default globalReducer;