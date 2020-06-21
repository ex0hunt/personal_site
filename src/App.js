import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import IndexScreen from './screens/index.jsx'

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
