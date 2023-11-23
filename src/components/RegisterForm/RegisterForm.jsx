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

// {/* <Formik
//   initialValues={{ name: '', email: '' }}
//   onSubmit={values => {
//     myServerRequestFunction(values);
//   }}
// >
//   {({ values, handleChange, handleSubmit }) => (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         id="name"
//         name="name"
//         type="text"
//         onChange={handleChange}
//         value={values.name}
//       />

//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={handleChange}
//         value={values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   )}
// </Formik>; */}

// import * as yup from 'yup';
// const shema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().email().required(),
//   password: yup.string().min(5).max(10).required(),
// });

// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
// };

// export default function RegisterForm() {

//   const handleSubmit = (value, { resetForm }) => {
//     console.log(value);
//     // console.log(actions);

//     resetForm();

//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={shema}
//       onSubmit={handleSubmit}
//     >
//       <RegistFormWrap autoComplete="off">
//         <Input
//           type="text"
//           name="name"
//           className="input-form"
//           placeholder="Name..."
//           required
//         />
//         <ErrorForm name="name" component="div" />
//         <Input
//           type="email"
//           name="email"
//           placeholder="Email..."
//           className="input-form"
//           required
//         />
//         <ErrorForm name="email" component="div" />
//         <Input
//           type="password"
//           name="password"
//           placeholder="Password..."
//           className="input-form"
//           required
//         />
//         <ErrorForm name="password" component="div" />
//         <BtnForm type="submit">Sign Up</BtnForm>
//       </RegistFormWrap>
//     </Formik>
//   );
// }
