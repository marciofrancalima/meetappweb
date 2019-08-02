import React from 'react';

// import { Container } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  api.get('meetups');
  return <h1>Dashboard</h1>;
}
