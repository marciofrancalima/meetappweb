import React from 'react';
import { useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/images/logo.svg';

import { SubmitButton } from '~/pages/_layouts/auth/styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha tem que ter no mínimo 6 caracteres ')
    .required('Senha é obrigatória'),
});

export default function SignUp() {
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <FaSpinner size={16} color="#fff" /> : 'Criar conta'}
        </SubmitButton>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
