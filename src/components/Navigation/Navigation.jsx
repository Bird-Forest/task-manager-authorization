// import { NavLink } from 'react-router-dom';
import {
  AuthMenu,
  BtnMenu,
  HeaderWrap,
  LogMenu,
  MobileMenu,
  StyledNavLink,
  TabletMenu,
  WrapMenu,
} from './Navigation.styled';
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
    <HeaderWrap>
      {isLoggedIn ? (
        <LogMenu>
          <MobileMenu>
            <BtnMenu onClick={() => setIsHidden(!isHidden)}>
              <RiMenuSearchFill className="icon-menu" />
            </BtnMenu>
            {!isHidden && (
              <WrapMenu
                style={{
                  transform: isHidden
                    ? 'translate(0, -100%)'
                    : 'translate(0, 0)',
                }}
              >
                <StyledNavLink to="/" onClick={handleClick}>
                  Home
                </StyledNavLink>
                <StyledNavLink to="/tasks" onClick={handleClick}>
                  Tasks
                </StyledNavLink>
              </WrapMenu>
            )}
          </MobileMenu>
          <TabletMenu>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/tasks">Tasks</StyledNavLink>
          </TabletMenu>
          <UserMenu />
        </LogMenu>
      ) : (
        <AuthMenu>
          <StyledNavLink to="/">Home</StyledNavLink>
          <AuthNav />
        </AuthMenu>
      )}
    </HeaderWrap>
  );
};
