import { combineReducers } from 'redux';
import { login } from './login.reducer';

const rootReducer = combineReducers({
    // 리듀서들이 추가될 곳
    login
})

export default rootReducer;