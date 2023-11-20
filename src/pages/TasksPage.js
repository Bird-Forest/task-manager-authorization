// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
// import { fetchTasks } from 'redux/operations';
import TaskForm from 'components/TaskForm/TaskForm';
import { WrapTasksPage } from './Page.styled';
import TaskList from 'components/Task/TaskList';

export default function TasksPage() {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <WrapTasksPage>
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskForm />
      <TaskList />
    </WrapTasksPage>
  );
}
