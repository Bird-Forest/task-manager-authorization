// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading } from 'redux/selectors';
// import { fetchTasks } from 'redux/operations';
import TaskForm from 'components/TaskForm/TaskForm';
import TaskList from 'components/TaskList/TaskList';
import { WrapTasksPage } from './Page.styled';

export default function TasksPage() {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <WrapTasksPage>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </WrapTasksPage>
  );
}
