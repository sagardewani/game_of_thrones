import React from "react";
import { Switch } from "react-router-dom";
import Public from "./Public";
const Battlefield = React.lazy(() => import('views/Layout'));

const Routes = () => {
  return (
    <React.Suspense fallback={"loading..."}>
      <Switch>
        <Public
          exact
          path="/*"
          component={Battlefield}
        />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
