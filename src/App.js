import React, {Component} from 'react';
import ReactGA from "react-ga";
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import "bootstrap/dist/css/bootstrap.min.css";
import './css/index.css';

import IndexScreen from './screens/index.jsx'


ReactGA.initialize('UA-155365290-1');

class App extends Component {
  render() {
    return (
       <Router history={createBrowserHistory()}>
            <section className="b-page">
            <Switch>
                <Route path="/" component={IndexScreen} />
            </Switch>
        </section>
    </Router>
    );
  }

}

export default App;
