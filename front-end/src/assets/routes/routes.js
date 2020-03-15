import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoutes from './privateRoutes';
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signin from "../pages/Signin";
import NotFound from '../pages/NotFound';

class Routes extends Component {

    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoutes exact path="/main" component={Main} isAuthenticated={false} />
                <Route path="/signin" component={Signin} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    }

}

export default Routes;