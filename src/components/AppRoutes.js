import { Router, browserHistory } from 'react-router';
import AsyncProps from 'async-props';
import React, { Component } from 'react';
import { render } from 'react-dom';
import routes from '../routes';
import App from './App';

class AppRoutes extends Component {
  render() {
    return (
      <Router routes={routes} history={browserHistory} render={(props) => <AsyncProps {...props}/>} />
    );
  }
}

export default AppRoutes;
