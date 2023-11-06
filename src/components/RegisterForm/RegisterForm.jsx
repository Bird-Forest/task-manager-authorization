import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { WrapRegisterForm } from './RegisterForm.styled';
import { registerThunk } from 'redux/operations';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = formData => {
    dispatch(registerThunk(formData));
    console.log(formData);
    reset();
  };

  return (
    <WrapRegisterForm>
      <form onSubmit={handleSubmit(onSubmit)} className="box-form">
        <label className="textField">
          Name
          {/* <span>Name:</span> */}
          <input {...register('name', { required: true })} type="text" />
          {errors.name && <span>This field is required</span>}
        </label>
        <label className="textField">
          Email
          {/* <span>Email:</span> */}
          <input {...register('email', { required: true })} type="email" />
          {errors.email && <span>This field is required</span>}
        </label>

        <label className="textField">
          Password
          {/* <span>:</span> */}
          <input
            {...register('password', { required: true, minLength: 7 })}
            type="password"
          />
          {errors.password && <span>This field is required</span>}
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </WrapRegisterForm>
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
