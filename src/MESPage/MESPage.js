import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginActions } from '../_actions';

import { Link, Route } from 'react-router-dom';

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
                <hr />
                <ul>조회
                    <li><Link to="/MES/lotsearch">로트조회</Link></li>
                    <li><Link to="/MES/lotList">로트목록</Link></li>
                </ul>
                <hr/>
                <ul>재고
                    <li><Link to="/MES/stockByLot">로트별 재고현황</Link></li>
                    <li><Link to="/MES/stockIn">입고</Link></li>
                    <li><Link to="/MES/stockByItem">품목별 재고현황</Link></li>
                </ul>

                <div>
                    <Route path="/MES/lotsearch" component={lotSearch} />
                    <Route path="/MES/lotList" component={lotList} />
                    <Route path="/MES/stockByLot" component={stockByLot} />
                    <Route path="/MES/stockByItem" component={stockByItem} />
                    <Route path="/MES/stockIn" component={stockIn} />
                </div>

            </div>
        );
    }
}

const lotSearch = () => <h1>로트조회</h1>
const lotList = () => <h1>로트목록</h1>
const stockByLot = () => <h1>로트별 재고현황</h1>
const stockByItem = () => <h1>품목별 재고현황</h1>
const stockIn = () => <h1>입고</h1>


export default MESPage;

const connectedMESPage = connect()(MESPage);
export { connectedMESPage as MESPage };