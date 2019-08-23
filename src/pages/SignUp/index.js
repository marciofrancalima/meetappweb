import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signUpValidation } from '~/util/validations';

import logo from '~/assets/images/logo.svg';

import { SubmitButton } from '~/pages/_layouts/auth/styles';
import Loading from '~/components/Loading';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={signUpValidation} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <Loading height={20} /> : 'Criar conta'}
        </SubmitButton>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
