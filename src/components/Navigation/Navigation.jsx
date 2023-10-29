import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavMenu } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavMenu>
      <NavLink to="/" className="navigate">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/tasks" className="navigate">
          Tasks
        </NavLink>
      )}
    </NavMenu>
  );
};
