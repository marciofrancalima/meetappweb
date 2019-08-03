import React from 'react';
import { Link } from 'react-router-dom';

import { Container, MeetupItem, MeetupList, NewMeetupButton } from './styles';

export default function Meetup() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <NewMeetupButton>Novo meetup</NewMeetupButton>
      </header>

      <MeetupList>
        <MeetupItem>
          <Link to="/">Novo meetup React</Link>
          <time>05 de agosto de 2019</time>
        </MeetupItem>
        <MeetupItem>
          <Link to="/">React Native na prática</Link>
          <time>06 de agosto de 2019</time>
        </MeetupItem>
        <MeetupItem>
          <Link to="/">Fundamentos de Node.js</Link>
          <time>07 de agosto de 2019</time>
        </MeetupItem>
        <MeetupItem>
          <Link to="/">Criando uma aplicação do zero com Node.js</Link>
          <time>08 de agosto de 2019</time>
        </MeetupItem>
      </MeetupList>
    </Container>
  );
}
