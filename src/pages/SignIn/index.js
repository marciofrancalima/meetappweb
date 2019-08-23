import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signInValidation } from '~/util/validations';

import logo from '~/assets/images/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

import { SubmitButton } from '~/pages/_layouts/auth/styles';
import Loading from '~/components/Loading';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={signInValidation} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <Loading height={20} /> : 'Entrar'}
        </SubmitButton>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
