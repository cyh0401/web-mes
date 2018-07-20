import React, { Component } from 'react';
import { loginActions } from '../_actions';
import { connect } from 'react-redux';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    login = (e) => {
        e.preventDefault();

        const { dispatch } = this.props;
        const { username, password } = this.state;
        dispatch(loginActions.login(username, password));

    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <h1>로그인</h1>
                    <hr />
                    <p>아이디: <input type='text' name='username' onChange={this.handleChange} /></p>
                    <p>패스워드: <input type='password' name='password' onChange={this.handleChange} /></p>
                    <button>로그인</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.login.userInfo
});

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }
