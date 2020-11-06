/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or 
* distributed to other students.
*
* Name: Li-Ching, Cheng  Student ID: 143292175  Date: 2019/07/01
*
********************************************************************************/

import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Overview from './ Component/Overview';
import Projects from './ Component/Projects';
import Teams from './ Component/Teams';
import Employees from './ Component/Employees';
import NotFound from './ Component/NotFound';

  class App extends Component { 
    render() {
      return ( 
        <Switch>
          <Route exact path='/' render={() => (<Overview />)} />
          <Route exact path='/projects' render={() => (<Projects />)} />
          <Route exact path='/teams' render={() => (<Teams />)} />
          <Route exact path='/employees' render={() => (<Employees />)} />
          <Route render={() => (<NotFound />)} />
        </Switch>
      ); 
    }
  }

export default App;