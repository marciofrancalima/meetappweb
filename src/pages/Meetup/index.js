import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO, isBefore } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  Container,
  Wrapper,
  MeetupItem,
  MeetupList,
  NewMeetupButton,
  Actions,
} from './styles';

import Loading from '~/components/Loading';

// Limit Per Page
const per_page = 5;

export default function Meetup() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [totalMeetups, setTotalMeetups] = useState(0);
  const [filtered, setFiltered] = useState('all');

  const totalPages = useMemo(() => totalMeetups / per_page, [totalMeetups]);

  useEffect(() => {
    async function loadMeetups() {
      try {
        const response = await api.get('organizing', {
          params: {
            per_page,
            page,
            filter: filtered,
          },
        });

        const data = response.data.rows.map(meetup => {
          return {
            ...meetup,
            formattedDate: format(
              parseISO(meetup.date),
              "dd 'de' MMMM, 'às' HH:mm",
              {
                locale: pt,
              }
            ),
            past: isBefore(parseISO(meetup.date), Date.now()),
          };
        });

        setTotalMeetups(response.data.count);
        setMeetups(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(
          'Os dados não foram carregados. Entre em contato com o suporte'
        );
      }
    }

    loadMeetups();
  }, [page, totalPages, filtered]);

  function handlePage(action) {
    const newPage = action === 'back' ? page - 1 : page + 1;
    setPage(newPage);
  }

  function handleFiltered(filter) {
    setFiltered(filter);
  }

  return (
    <Container>
      {loading && (
        <Wrapper>
          <Loading color="#f94d6a" height={100} />
        </Wrapper>
      )}

      {!loading && (
        <header>
          <h1>
            {filtered === 'all'
              ? 'Meus meetups'
              : filtered === 'next'
              ? 'Meetups agendados'
              : 'Meetups realizados'}{' '}
            <span>{totalMeetups ? `(${totalMeetups})` : ''}</span>
          </h1>

          <div>
            <button type="button" onClick={() => handleFiltered('all')}>
              Todos
            </button>
            <button type="button" onClick={() => handleFiltered('next')}>
              Agendados
            </button>
            <button type="button" onClick={() => handleFiltered('past')}>
              Realizados
            </button>

            <NewMeetupButton to="/meetup">Novo meetup</NewMeetupButton>
          </div>
        </header>
      )}

      {!loading && (
        <MeetupList>
          {meetups.map(meetup => (
            <MeetupItem key={meetup.id} past={meetup.past}>
              <Link to={`/meetup/${meetup.id}`}>{meetup.title}</Link>
              <time>{meetup.formattedDate}</time>
            </MeetupItem>
          ))}
        </MeetupList>
      )}

      {!loading && totalPages === 0 && (
        <strong>Você ainda não tem meetups cadastrados</strong>
      )}

      {totalPages > 1 && (
        <Actions>
          <button
            type="button"
            onClick={() => handlePage('back')}
            disabled={page < 2}
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => handlePage('next')}
            disabled={totalPages <= page}
          >
            Próximo
          </button>
        </Actions>
      )}
    </Container>
  );
}
