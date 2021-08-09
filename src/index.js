import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './index.css';
import Home from './Home/index';
import Game from './Game/index';
import Score from './Score';
import Test from './Test';


var hist = createBrowserHistory();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path = "/score" component = {Score}/>
      <Route path="/game" component = {Game}/>
      <Route path="/test" component={Test} />
      <Route path="/" component={Home} />
      

    </Switch>
  </Router>,
rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
