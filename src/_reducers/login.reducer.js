import { loginConstants } from '../_constants';

let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
const initialState = userInfo ? { userInfo } : {};

export function login(state = initialState, action) {
    switch (action.type) {
        case loginConstants.LOGIN_SUCCESS:
            return {
                userInfo: action.payload
            };
        case loginConstants.LOGOUT:
            return {
                userInfo: null
            };
        default:
            return state
    }
}