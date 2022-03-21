import React, { useState } from 'react';
import QrCodeReader from './QrCodeReader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './Payment';


export default function App() {
  return (
    <Router>    
        <Switch>
          <Route exact path="/">
            <QrCodeReader />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
        </Switch>   
    </Router>
  );
}