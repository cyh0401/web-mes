import axios from 'axios';

export const loginService = {
    login,
    logout
};

/*
    로그인
    sessionStorage에 토큰 값과 사용자의 이름을 저장한다.
*/
function login(userName, password) {
    const requestParams = { userName, password };

    return axios.post('http://192.168.101.129:8070/authentication', requestParams)
        .then(userInfo => {
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            console.log('세션스토리지에 토큰 및 유저정보를 저장했습니다.');
            return userInfo;
        });
}

/*
    로그아웃
    sessionStorage에 'userInfo' 객체를 삭제한다.
*/
function logout() {
    sessionStorage.removeItem('userInfo');
    console.log('세션스토리지에 토큰 및 유저정보를 삭제하였습니다.');
}