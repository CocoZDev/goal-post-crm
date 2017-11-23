import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

import Main from './components/Main';
import Login from './components/Login';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Customers from './components/Customers';
import Products from './components/Products';
import Schedule from './components/Schedule';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="login" component={Login} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="Contact" component={Contact} />
        <Route path="Customer" component={Customer} />
        <Route path="Products" component={Products} />
        <Route path="Schedule" component={Schedule} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);