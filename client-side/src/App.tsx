import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { TicketHistoryComponent } from './components/ticket.history'


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
          <Route path="/history">
            <TicketHistoryComponent/>
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
