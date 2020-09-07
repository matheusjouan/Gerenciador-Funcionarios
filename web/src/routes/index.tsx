import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
// import Profile from '../pages/Profile';
import UpdateProfile from '../pages/UpdateProfile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/register" exact component={Register} />
    {/* <Route path="/users/:id" exact component={Profile} /> */}
    <Route path="/users/edit/:id" exact component={UpdateProfile} />
  </Switch>
);

export default Routes;
