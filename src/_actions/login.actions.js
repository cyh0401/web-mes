import { loginConstants } from '../_constants';
import { loginService } from '../_services';
import { history } from '../_helpers';

export const loginActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        loginService.login(username, password)
            .then(
                userInfo => {
                    dispatch(success(userInfo));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("로그인 실패");
                    alert("로그인 실패");
                }
            );
    };

    //function request() { return { type: loginConstants.LOGIN_REQUEST } }
    function success(userInfo) { return { type: loginConstants.LOGIN_SUCCESS, payload: userInfo } }
    function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error } }
}

function logout() {
    loginService.logout();
    return { type: loginConstants.LOGOUT };
}