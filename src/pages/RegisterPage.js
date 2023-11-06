import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
// import { Helmet } from 'react-helmet';
import { TitleRegisterPage, WrapRegisterPage } from './Page.styled';

export default function RegisterPage() {
  return (
    <WrapRegisterPage>
      <TitleRegisterPage>Registration</TitleRegisterPage>

      <RegisterForm />
    </WrapRegisterPage>
  );
}
