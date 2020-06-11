import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Login from './login';
import Registration from './registration';
import CustomerForm from './customerForm';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/customer-form" component={CustomerForm} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    );
}
