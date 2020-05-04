import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import List from '../src/components/repos/List';
import axios from 'axios';


export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" component={List}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
