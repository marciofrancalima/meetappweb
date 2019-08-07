import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '../BannerInput';
import DatePicker from '~/components/DatePickerInput';

import { Container, SubmitButton } from './styles';
import Loading from '~/components/Loading';

export default function Create() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      await api.post('meetups', data);

      setLoading(false);

      toast.success('Meetup criado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      setLoading(false);
      const message = String(error.response.data.message);
      toast.error(message);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do meetup" />
        <Input
          name="description"
          placeholder="Descrição completa"
          multiline
          rows={5}
        />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <Loading height={20} /> : 'Salvar'}
        </SubmitButton>
      </Form>
    </Container>
  );
}
