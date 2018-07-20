import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginActions } from '../_actions';

class MESPage extends Component {

    logout = () => {
        const { dispatch } = this.props;
        dispatch(loginActions.logout());
    }

    render() {
        return (
            <div>
                <h1>MES</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default MESPage;

const connectedMESPage = connect()(MESPage);
export { connectedMESPage as MESPage };