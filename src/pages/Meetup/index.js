import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Wrapper,
  MeetupItem,
  MeetupList,
  NewMeetupButton,
} from './styles';

import Loading from '~/components/Loading';

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
            "dd 'de' MMMM, 'às' HH:mm",
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
        <Wrapper>
          <Loading color="#f94d6a" height={100} />
        </Wrapper>
      ) : (
        <>
          <header>
            <h1>Meus meetups</h1>
            <NewMeetupButton to="/meetup">Novo meetup</NewMeetupButton>
          </header>

          <MeetupList>
            {meetups.map(meetup => (
              <MeetupItem key={meetup.id}>
                <Link to={`/meetup/${meetup.id}`}>{meetup.title}</Link>
                <time>{meetup.formattedDate}</time>
              </MeetupItem>
            ))}
          </MeetupList>
        </>
      )}
    </Container>
  );
}
