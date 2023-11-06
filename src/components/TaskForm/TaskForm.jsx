import React from 'react';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';
import { BtnForm, FormTask, InputForm } from './TaskForm.styled';

import { useDispatch } from 'react-redux';
import { addTask } from 'redux/operations';
// import { addTask } from 'redux/operations';
// import { addTask } from 'redux/tasksSlice';
// import { addTask } from 'redux/operations';

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      event.target.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };
  return (
    <FormTask onSubmit={handleSubmit}>
      <InputForm type="text" name="text" placeholder="Enter task text..." />
      <BtnForm type="submit">
        <BsFillHandIndexThumbFill className="icon-add" />
      </BtnForm>
    </FormTask>
  );
}
