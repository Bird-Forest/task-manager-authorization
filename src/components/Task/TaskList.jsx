import React from 'react';
import { WrapList } from './Task.styled';
import {
  selectIsLoading,
  selectError,
  selectVisibleTasks,
} from 'redux/selectors';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Task from 'components/Task/Task';

export default function TaskList() {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const newTasks = useSelector(selectVisibleTasks);

  console.log(newTasks);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  const showArr = Array.isArray(newTasks) && newTasks.length !== 0;
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <WrapList>
        {showArr && newTasks.map(task => <Task task={task} key={nanoid()} />)}
      </WrapList>
    </>
  );
}
