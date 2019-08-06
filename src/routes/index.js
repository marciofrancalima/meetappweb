import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import CreateMeetup from '~/pages/Meetup/Create';
import DetailMeetup from '~/pages/Meetup/Detail';
import EditMeetup from '~/pages/Meetup/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup" exact component={CreateMeetup} isPrivate />
      <Route path="/meetup/:id" exact component={DetailMeetup} isPrivate />
      <Route path="/meetup/:id/edit" component={EditMeetup} isPrivate />
    </Switch>
  );
}
