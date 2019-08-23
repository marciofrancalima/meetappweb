import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { formatDateWithHour, isDone } from '~/util/dateUtils';

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
  const [filtered, setFiltered] = useState('next');

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
            formattedDate: formatDateWithHour(meetup.date),
            done: isDone(meetup.date),
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

  function handleTitlePage(filter) {
    switch (filter) {
      case 'next':
        return 'Meetups agendados';
      case 'all':
        return 'Meus meetups';
      default:
        return 'Meetups realizados';
    }
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
            {handleTitlePage(filtered)}{' '}
            <span>{totalMeetups ? `(${totalMeetups})` : ''}</span>
          </h1>

          <div>
            <button type="button" onClick={() => handleFiltered('next')}>
              Agendados
            </button>
            <button type="button" onClick={() => handleFiltered('past')}>
              Realizados
            </button>
            <button type="button" onClick={() => handleFiltered('all')}>
              Todos
            </button>
            <NewMeetupButton to="/meetup">Novo meetup</NewMeetupButton>
          </div>
        </header>
      )}

      {!loading && (
        <MeetupList>
          {meetups.map(meetup => (
            <MeetupItem key={meetup.id} done={meetup.done}>
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
