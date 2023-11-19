import React from 'react'; // import { useForm } from 'react-hook-form';
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
    console.log(credentials);
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

// console.log('GGGGGGGGGGG');
// const dispatch = useDispatch();

// const handleSubmit = e => {
//   console.log(e);
//   e.preventDefault();
//   const form = e.currentTarget;
//   // const name = form.elements.name.value;
//   const credentials = {
//     name: form.elements.name.value,
//     email: form.elements.email.value,
//     password: form.elements.password.value,
//   };
//   console.log(credentials);
//   dispatch(register(credentials));
//   form.reset();
// };

// return (

// );

//  <WrapRegisterForm>
//       RegisterForm
//       <FormRegister onSubmit={handleSubmit} autoComplete="off">
//         <label className="label-form">
//           Username
//           <input type="text" name="name" />
//         </label>
//         <label className="label-form">
//           Email
//           <input type="email" name="email" />
//         </label>
//         <label className="label-form">
//           Password
//           <input type="password" name="password" />
//         </label>
//         <button type="submit">Register</button>
//       </FormRegister>
//     </WrapRegisterForm>

// {/* <form onSubmit={handleSubmit} className="box-form">
//   <TextField
//     required
//     name="name"
//     label="Name"
//     type="text"
//     className="text-field"
//   />
//   <TextField
//     required
//     name="email"
//     label="Email"
//     type="email"
//     className="text-field"
//   />
//   <TextField
//     required
//     name="password"
//     label="Password"
//     type="password"
//     className="text-field"
//   />
//   <Fab variant="extended" size="medium" color="primary" className="btn-sign-up">
//     Sign Up
//   </Fab>
// </form>; */}
