import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../../core/data/routes';
import NavBar from './nav-bar';
import Footer from './footer/footer';
import Home from '../../components/customer/home';

const CustomerLayout = (props: any) => {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route path={ ROUTES.root }>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default CustomerLayout;
