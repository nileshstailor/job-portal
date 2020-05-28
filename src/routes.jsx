import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./app/module/container/homeContainer.js";
import TaskPage from "./app/module/container/taskPage.js";
import PageNotFount from "./app/module/container/pageNotFount.js";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/task" component={TaskPage} />
    
        <Route component={PageNotFount} />
    </Switch>
)

export default Routes;