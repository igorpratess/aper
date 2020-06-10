import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoutes from './privateRoutes';
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import NotFound from '../pages/NotFound';
import { connect } from 'react-redux';
import Listing from '../pages/Listing';
import RegisterItem from '../pages/RegisterItem';
import RegisterLost from '../pages/register/RegisterLost'
import RegisterFound from '../pages/register/RegisterFound';
import RegisterStolen from '../pages/register/RegisterStolen';
import ListLost from '../pages/list/ListLost';
import ListStolen from '../pages/list/ListStolen';
import ListFound from '../pages/list/ListFound';
import Chat from '../pages/Chat';

class Routes extends Component {

    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoutes exact path="/main" component={Main} isAuthenticated={this.props.isAuthenticated} />
                <Route path="/signup" component={Signup} />
                <PrivateRoutes exact path="/listing" component={Listing} isAuthenticated={this.props.isAuthenticated} />
                <PrivateRoutes exact path="/register-lost" component={RegisterLost} isAuthenticated={this.props.isAuthenticated} />
                <PrivateRoutes exact path="/register-found" component={RegisterFound} isAuthenticated={this.props.isAuthenticated} />
                <PrivateRoutes exact path="/register-stolen" component={RegisterStolen} isAuthenticated={this.props.isAuthenticated} />
                <PrivateRoutes exact path="/register-item" component={RegisterItem} isAuthenticated={this.props.isAuthenticated} />
                <PrivateRoutes exact path="/list-lost" component={ListLost} isAuthenticated={this.props.isAuthenticated} />
                <PrivateRoutes exact path="/list-found" component={ListFound} isAuthenticated={this.props.isAuthenticated} />
                <PrivateRoutes exact path="/list-stolen" component={ListStolen} isAuthenticated={this.props.isAuthenticated} />
                <PrivateRoutes exact path="/chat" component={Chat} isAuthenticated={this.props.isAuthenticated} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    }

}

const mapStateToProps = state => ({
    user: state.user.user,
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Routes);