import { NavLink } from 'react-router-dom';
import { WrapAuthNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapAuthNav>
      <NavLink to="/register" className="navigate">
        SignUp
      </NavLink>
      <NavLink to="/login" className="navigate">
        SignIn
      </NavLink>
    </WrapAuthNav>
  );
};
