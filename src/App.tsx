import React, { useState } from 'react';
import QrCodeReader from './QrCodeReader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './Payment';
import Home from './Home';


export default function App() {
  return (
    <Router>    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/qrscan">
            <QrCodeReader />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
        </Switch>   
    </Router>
  );
}