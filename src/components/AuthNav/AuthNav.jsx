import { NavLink } from 'react-router-dom';
import { WrapAuthNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapAuthNav>
      <NavLink to="/register" className="navigate">
        Register
      </NavLink>
      <NavLink to="/login" className="navigate">
        Log In
      </NavLink>
    </WrapAuthNav>
  );
};
