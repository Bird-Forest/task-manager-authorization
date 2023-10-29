import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { FormRegister, WrapRegisterForm } from './RegisterForm.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <WrapRegisterForm>
      RegisterForm
      <FormRegister onSubmit={handleSubmit} autoComplete="off">
        <label className="label-form">
          Username
          <input type="text" name="name" />
        </label>
        <label className="label-form">
          Email
          <input type="email" name="email" />
        </label>
        <label className="label-form">
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </FormRegister>
    </WrapRegisterForm>
  );
}
