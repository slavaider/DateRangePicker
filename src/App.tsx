import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "./routes";

import "date-fns";

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Switch>
        <Route {...routes.homepage} />;
        <Redirect from="*" to="/" />
      </Switch>
    </MuiPickersUtilsProvider>
  );
};

export default App;
