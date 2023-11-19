import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { TitleLoginPage, WrapLoginPage } from './Page.styled';

export default function LoginPage() {
  return (
    <WrapLoginPage>
      <TitleLoginPage>Login</TitleLoginPage>
      <LoginForm />
    </WrapLoginPage>
  );
}
