import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/operations';
import { LoginFormWrap } from './LoginForm.styled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(loginThunk(formData));
    form.reset();
  };

  return (
    <LoginFormWrap onSubmit={handleSubmit} autoComplete="off">
      <input
        type="email"
        name="email"
        placeholder="Email..."
        className="input-form"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password..."
        className="input-form"
        required
      />
      <button type="submit" className="btn-form">
        Sign In
      </button>
    </LoginFormWrap>
  );
}
