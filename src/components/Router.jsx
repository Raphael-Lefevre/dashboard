import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResponsiveDrawer from "./Layout";
import Notification from "./Notification";
import Market from "./Market";
import Data from "./Data";
import Map from "./Map";
import Mall from "./Mall";
import User from "./User";
import Home from "./Home";
import Login from "./Login";

export default function Router() {
  return (
    <BrowserRouter>
      <ResponsiveDrawer>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/notification" component={Notification} />
          <Route path="/market" component={Market} />
          <Route path="/data" component={Data} />
          <Route path="/map" component={Map} />
          <Route path="/mall" component={Mall} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ResponsiveDrawer>
    </BrowserRouter>
  );
}
