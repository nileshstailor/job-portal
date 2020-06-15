import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./app/module/container/homeContainer.js";
import JobsPage from "./app/module/container/jobsPageContainer.js";
import TaskPage from "./app/module/container/taskPage.js";
import PageNotFount from "./app/module/container/pageNotFount.js";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs-page" component={JobsPage} />
        <Route path="/task" component={TaskPage} />
    
        <Route component={PageNotFount} />
    </Switch>
)

export default Routes;