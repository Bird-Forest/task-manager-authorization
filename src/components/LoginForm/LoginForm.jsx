import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { WrapRegisterForm } from 'components/RegisterForm/RegisterForm.styled';
import { loginThunk } from 'redux/operations';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = formData => {
    dispatch(loginThunk(formData));
    reset();
  };

  return (
    <WrapRegisterForm>
      <form onSubmit={handleSubmit(onSubmit)} className="box-form">
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

        <button type="submit">Sign In</button>
      </form>
    </WrapRegisterForm>
  );
}

// const dispatch = useDispatch();
// const handleSubmit = evt => {
//   evt.preventDefault();
//   const form = evt.currentTarget;
//   dispatch(
//     logIn({
//       email: form.elements.email.value,
//       password: form.elements.password.value,
//     })
//   );
//   form.reset();
// };

// return (
//   <div>
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   </div>
// );
