import { NavLink } from 'react-router-dom';
import { BtnMenu, Header, NavMenu, WrapMenu } from './Navigation.styled';
import React, { useState } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { RiMenuSearchFill } from 'react-icons/ri';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(true);
  };

  return (
    <Header>
      <NavMenu>
        <BtnMenu onClick={() => setIsHidden(!isHidden)}>
          <RiMenuSearchFill className="icon-menu" />
          {isHidden ? (
            <WrapMenu className="hide" />
          ) : (
            <WrapMenu className="show" />
          )}
        </BtnMenu>
        {!isHidden && (
          <WrapMenu>
            <NavLink to="/" className="navigate-menu" onClick={handleClick}>
              Home
            </NavLink>
            <NavLink
              to="/tasks"
              className="navigate-menu"
              onClick={handleClick}
            >
              Tasks
            </NavLink>
          </WrapMenu>
        )}
        <NavLink to="/" className="navigate">
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/tasks" className="navigate">
              Tasks
            </NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <AuthNav />
          </>
        )}
      </NavMenu>
    </Header>
  );
};

//  {
//    /* <NavLink to="/register" className="navigate">
//               Register
//             </NavLink>
//             <NavLink to="/login" className="navigate">
//               Login
//             </NavLink> */
//  }
