import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdSchedule, MdLocationOn } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Wrapper,
  EditButton,
  CancelButton,
  Description,
} from './styles';
import Loading from '~/components/Loading';

export default function Detail({ match }) {
  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState(null);

  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`organizing/${id}`);

        setMeetup({
          ...response.data,
          formattedDate: format(
            parseISO(response.data.date),
            "dd 'de' MMMM, 'às' HH:mm",
            {
              locale: pt,
            }
          ),
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(
          'Os dados não foram carregados. Entre em contato com o suporte'
        );
      }
    }

    loadMeetup();
  }, [id]);

  async function handleDelete(meetupId) {
    try {
      await api.delete(`/meetups/${meetupId}`);

      toast.success('Meetup cancelado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      const message = String(error.response.data.message);

      toast.error(message);
    }
  }

  return (
    <>
      {loading ? (
        <Wrapper>
          <Loading color="#f94d6a" height={100} />
        </Wrapper>
      ) : (
        <Container>
          <header>
            <h1>{meetup.title}</h1>
            <div>
              <EditButton edit={true ? 1 : 0} to={`/meetup/${meetup.id}/edit`}>
                Editar
              </EditButton>
              <CancelButton onClick={() => handleDelete(meetup.id)}>
                Cancelar
              </CancelButton>
            </div>
          </header>

          <img src={meetup.banner.url} alt={meetup.title} />

          <Description>
            <p>{meetup.description}</p>

            <div>
              <time>
                <MdSchedule size={18} color="#fff" />
                {meetup.formattedDate}
              </time>
              <span>
                <MdLocationOn size={18} color="#fff" />
                {meetup.location}
              </span>
            </div>
          </Description>
        </Container>
      )}
    </>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
