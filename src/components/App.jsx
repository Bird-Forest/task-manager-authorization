import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { useAuth } from 'hooks';
import { refreshUser } from 'redux/operations';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/TasksPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) :
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// import TaskForm from './TaskForm/TaskForm';
// import AppBar from './TasksMenu/AppBar';
// import TaskList from './TaskList/TaskList';
// import { Container, WrapFormTask } from './App.styled';

// export const App = () => {
//   return (
//     <Container>
//       <AppBar />
//       <WrapFormTask>
//         <TaskForm />
//         <TaskList />
//       </WrapFormTask>
//     </Container>
//   );
// };
