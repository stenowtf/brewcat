import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router";
import Home from "./home";

const Categories = lazy(() => import("./categories"));

export const Routes = () => (
  <Suspense fallback={"Loading..."}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Suspense>
);

Routes.propTypes = {};

export const RoutesWithRouter = withRouter(Routes);
