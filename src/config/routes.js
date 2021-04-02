import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';


export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/signup' component={ SignUp }/>
    <Route exact path='/login' component={ LogIn }/>
  </Switch>
);