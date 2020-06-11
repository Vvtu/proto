import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main';
import Login from './login';
import Registration from './registration';
import CustomerForm, { CUSTOMER_FORM } from './customerForm';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path={CUSTOMER_FORM} component={CustomerForm} />
                <Route path="/" component={Main} />
            </Switch>
        </Router>
    );
}
