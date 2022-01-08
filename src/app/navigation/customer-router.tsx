import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../core/data/routes';
import HomePageLayout from '../layout/homepage-layout';
import CustomerLayout from '../layout/customer-layout';

const CustomerRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ `/${ ROUTES.root }` } component={ HomePageLayout } />
        <Route path={ `/${ ROUTES.customer.payment }` } component={ CustomerLayout } />
      </Switch>
    </Router>
  );
};

export default CustomerRouter;
