import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Login from './login';
import Registration from './registration';
import CustomerInfo from './customerInfo';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/customer-info">
                    <CustomerInfo />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    );
}
