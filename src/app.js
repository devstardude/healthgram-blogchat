import React from "react";
import { Router, Route, Switch,Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Landing from "./components/Landing/page/Landing"
import Login from "./components/Login/Login";
import Navbar from "./components/shared/Navbar";
import MainPage from "./components/MainPage/MainPage";
import'./app.css';
let hist = createBrowserHistory();
const App = (props) => {
  return (
    <div>
      <Router history={hist}>
        <Navbar/>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/mainpage" component={MainPage} />
            <Route exact path="/" component={Landing} />
            <Redirect to="/" />
          </Switch>
      </Router>
    </div>
  );
};

export default App;
