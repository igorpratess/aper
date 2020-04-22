import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoutes from './privateRoutes';
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import NotFound from '../pages/NotFound';
import { connect } from 'react-redux';

class Routes extends Component {

    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoutes exact path="/main" component={Main} isAuthenticated={this.props.isAuthenticated} />
                <Route path="/signup" component={Signup} />
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