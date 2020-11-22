import React, { Suspense } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom';

const PageContent = ({ routes }) => {
  return (
    <Suspense fallback={"loading..."}>
      <Switch>
        {
          routes.map((route, idx) => {
            try {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component { ...props } /> }
                />
              );
            }
            catch(err){ 
              console.log("err", err);
            }
          })
        }
      </Switch>
    </Suspense>
  )
}

export default React.memo(PageContent)
