import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks';
// import { refreshUser } from 'redux/operations';
import { Navigation } from './Navigation/Navigation';
import { refreshThunk } from 'redux/operations';
// import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const TasksPage = lazy(() => import('../pages/TasksPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/tasks', element: <TasksPage /> },
];

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

// {
//   /* <Route path="/" element={<Layout />}>
//   <Route index element={<HomePage />} />
//   <Route
//     path="/register"
//     element={
//       <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//     }
//   />
//   <Route
//     path="/login"
//     element={<RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />}
//   />
//   <Route
//     path="/tasks"
//     element={<PrivateRoute redirectTo="/login" component={<TasksPage />} />}
//   />
// </Route>; */
// }
