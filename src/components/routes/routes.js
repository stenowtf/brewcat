import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router";

const Home = lazy(() => import("./home"));
const Catalog = lazy(() => import("./catalog"));
const Beer = lazy(() => import("./beer"));

const Loading = () => (
  <div className="ph3 tc ph5-ns mt0-ns pt0-ns">
    <div className="mw9 center i">{"Loading…"}</div>
  </div>
);

export const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/beer/:id" component={Beer} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Suspense>
);

Routes.propTypes = {};

export const RoutesWithRouter = withRouter(Routes);
