import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1769aa;
  width: 100%;
  height: 64px;
  padding: 0;
  margin: 0 auto;
  @media screen and (min-width: 500px) {
    width: 520px;
  }
`;
export const AuthMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  padding: 0 10px;
  /* margin: 0 auto; */
  @media screen and (min-width: 380px) {
    min-width: 360px;
  }
  @media screen and (min-width: 440px) {
    min-width: 420px;
  }
  @media screen and (min-width: 500px) {
    width: 480px;
  }
`;

export const LogMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  /* padding: 0 10px; */
  /* margin: 0 auto; */
  @media screen and (min-width: 380px) {
    min-width: 360px;
  }
  @media screen and (min-width: 440px) {
    min-width: 420px;
  }
  @media screen and (min-width: 500px) {
    width: 480px;
    /* padding: 0 20px; */
  }
`;
export const MobileMenu = styled.div`
  display: block;
  @media screen and (min-width: 440px) {
    display: none;
  }
`;
export const BtnMenu = styled.button`
  display: block;
  background-color: #1769aa;
  border: #1769aa;
  width: 36px;
  height: 36px;
  margin: 0 0 0 10px;
  padding: 0;
  .icon-menu {
    background-color: #1769aa;
    width: 36px;
    height: 36px;
    fill: white;
  }
  @media screen and (min-width: 440px) {
    display: none;
  }
`;
export const TabletMenu = styled.div`
  display: none;
  @media screen and (min-width: 440px) {
    display: block;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-right: 20px;
  &.active {
    color: #2196f3;
  }
`;
export const WrapMenu = styled.div`
  position: absolute;
  top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #4dabf5;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 440px) {
    display: none;
    visibility: hidden;
  }
`;

export const NavMenuLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  .navigate {
    display: none;
    visibility: hidden;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: white;
    &.active {
      color: #2196f3;
    }
  }
  @media screen and (min-width: 440px) {
    /* justify-content: center; */
    width: 440px;
    .navigate {
      display: block;
      visibility: visible;
      margin-left: 10px;
    }
  }
  @media screen and (min-width: 500px) {
    width: 480px;
  }
`;
