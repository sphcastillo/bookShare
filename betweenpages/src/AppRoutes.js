import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";

function AppRoutes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
        </Switch>
    )
}

export default AppRoutes