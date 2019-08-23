import * as Yup from 'yup';

/**
 * Validates all fields for creation and editing meetups.
 */
export const meetupValidation = Yup.object().shape({
  file_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date: Yup.date().required('Data obrigatória'),
  location: Yup.string().required('Localização é obrigatória'),
});

/**
 * Validates all sign in fields.
 */
export const signInValidation = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

/**
 * Validates all sign up fields.
 */
export const signUpValidation = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha tem que ter no mínimo 6 caracteres ')
    .required('Senha é obrigatória'),
});
