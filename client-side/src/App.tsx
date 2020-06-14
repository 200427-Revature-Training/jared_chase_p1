import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { TicketHistoryComponent } from './components/ticket-history';
import { MGRTicketHistoryComponent } from './components/mgr-ticket-history';
import { MGRHomeComponent } from './components/mgr-home';
import { NewTicketComponent } from './components/new-ticket';


function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/login">
            <LoginComponent/>
          </Route>
          <Route path="/home">
            <HomeComponent/>
          </Route>
          <Route path="/mgr/home">
            <MGRHomeComponent/>
          </Route>
          <Route path="/history">
            <TicketHistoryComponent/>
          </Route>
          <Route path="/mgr/history">
            <MGRTicketHistoryComponent/>
          </Route>
          <Route path="/newticket">
            <NewTicketComponent/>
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
