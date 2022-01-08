import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../core/data/routes';
import CustomerLayout from '../layout/customer-layout';
import HomePageLayout from '../layout/homepage-layout';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ `/${ ROUTES.root }` } component={ HomePageLayout } />
        <Route path={ `/${ ROUTES.customer.root }` } component={ CustomerLayout } />
      </Switch>
    </Router>
  );
};

export default AppRouter;
