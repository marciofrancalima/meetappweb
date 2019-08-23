import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';

import { meetupValidation } from '~/util/validations';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '../BannerInput';
import DatePicker from '~/components/DatePickerInput';

import { Container, Wrapper, SubmitButton } from './styles';
import Loading from '~/components/Loading';

export default function Update({ match }) {
  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`/organizing/${id}`);

        const data = {
          ...response.data,
          date: parseISO(response.data.date),
        };

        setMeetup(data);
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

  async function handleSubmit(data) {
    setLoading(true);
    try {
      await api.put(`/meetups/${id}`, data);

      setLoading(false);
      toast.success('Meetup alterado com sucesso');

      history.push('/dashboard');
    } catch (error) {
      setLoading(false);
      const message = String(error.response.data.message);

      toast.error(message);
    }
  }

  return (
    <Container>
      {loading ? (
        <Wrapper>
          <Loading color="#f94d6a" height={100} />
        </Wrapper>
      ) : (
        <Form
          schema={meetupValidation}
          onSubmit={handleSubmit}
          initialData={meetup}
        >
          <BannerInput name="file_id" />

          <Input name="title" placeholder="Título do meetup" />
          <Input
            name="description"
            multiline={50}
            placeholder="Descrição completa"
          />
          <DatePicker name="date" placeholder="Data do meetup" />
          <Input name="location" placeholder="Localização" />

          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? <Loading height={20} /> : 'Salvar'}
          </SubmitButton>
        </Form>
      )}
    </Container>
  );
}

Update.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
