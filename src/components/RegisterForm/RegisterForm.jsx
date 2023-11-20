import React from 'react';
import { useDispatch } from 'react-redux';
import { RegisterFormWrap } from './RegisterForm.styled';
import { registerThunk } from 'redux/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    const form = e.currentTarget;
    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    // console.log(credentials);
    dispatch(registerThunk(credentials));
    form.reset();
  };
  return (
    <RegisterFormWrap onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        name="name"
        className="input-form"
        placeholder="Name..."
        required
      />
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
        Sign Up
      </button>
    </RegisterFormWrap>
  );
}
