import React from 'react';
import { FaPenToSquare } from 'react-icons/fa6';
import { BtnForm, FormTask, InputForm } from './TaskForm.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasksSlice';

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    if (title !== '') {
      dispatch(addTask(title));
      event.target.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };
  return (
    <FormTask onSubmit={handleSubmit}>
      <InputForm type="title" name="title" placeholder="Enter task text..." />
      <BtnForm type="submit">
        <FaPenToSquare className="icon-add" />
      </BtnForm>
    </FormTask>
  );
}
