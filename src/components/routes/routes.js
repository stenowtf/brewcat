import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router";
import Home from "./home";

const Catalog = lazy(() => import("./catalog"));
const Beer = lazy(() => import("./catalog/beer"));

export const Routes = () => (
  <Suspense fallback={"Loading…"}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/:id" component={Beer} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Suspense>
);

Routes.propTypes = {};

export const RoutesWithRouter = withRouter(Routes);
