import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../core/data/routes';
import { NotFound } from './not-found';
import { Home } from '../components/customer/home';
import Main from '../components/customer/main';

export const RouterConfig = () => {
 return (
   <Router>
     <Switch>
       {/* List all public routes here */}
       <Route exact path={ ROUTES.root } component={ Home } />
       <Route exact path={ ROUTES.customer.root } component={ Main } />

       {/* All the authentication protected routes will go here */}
       {/*<PrivateRoute path={ROUTES.ROOT}>*/}
       {/*  <Page1 />*/}
       {/*</PrivateRoute>*/}

       {/* 404 page not found will redirect to Index Screen */}
       <Route path='*' component={NotFound} />
     </Switch>
   </Router>
 );
};

export default RouterConfig;
