import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./assets/pages/Login";
import Main from "./assets/pages/Main";
import Signin from "./assets/pages/Signin";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/signin" component={Signin}/>
        </BrowserRouter>
    )
}