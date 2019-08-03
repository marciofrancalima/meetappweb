import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
// import Loader from 'react-loader-spinner';

import api from '~/services/api';

import {
  Container,
  MeetupItem,
  MeetupList,
  NewMeetupButton,
  Loading,
} from './styles';

export default function Meetup() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date),
            "dd 'de' MMMM, 'às' HH'h'",
            {
              locale: pt,
            }
          ),
        };
      });

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header>
            <h1>Meus meetups</h1>
            <NewMeetupButton>Novo meetup</NewMeetupButton>
          </header>

          <MeetupList>
            {meetups.map(meetup => (
              <MeetupItem key={meetup.id}>
                <Link to="/">{meetup.title}</Link>
                <time>{meetup.formattedDate}</time>
              </MeetupItem>
            ))}
          </MeetupList>
        </>
      )}
    </Container>
  );
}
