import "./App.css";
import Quote from "../components/Quote";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id">
            <Quote />
          </Route>
          <Route path="/">
            <Quote />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
