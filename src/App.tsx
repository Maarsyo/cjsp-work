import React from "react";
import routes from './routes';
import { Route } from "react-router-dom";

function App() {
  return (
    <>
    {routes.map((object: any, idx: React.Key) => (
      <Route key={idx} path={object.path} exact={object.exact} render={(props: any) => (
        <object.component {...props} />
      )}></Route>
    ))}
  </>

  );
}

export default App;