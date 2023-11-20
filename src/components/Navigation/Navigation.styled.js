import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1769aa;
  /* min-width: 320px; */
  width: 100%;
  height: 64px;
  padding: 0;
  margin: 0 auto;
  @media screen and (min-width: 380px) {
    min-width: 360px;
  }
  @media screen and (min-width: 440px) {
    min-width: 420px;
  }
  @media screen and (min-width: 500px) {
    width: 520px;
  }
`;

export const NavMenu = styled.div`
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
export const WrapMenu = styled.div`
  position: absolute;
  top: 64px;
  &.hide {
    left: -100%;
  }
  &.show {
    left: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #4dabf5;
  margin: 0;
  padding: 0;
  transition: transform;
  .navigate-menu {
    margin: 20px auto;
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
    color: white;
    &.active {
      color: #1769aa;
    }
  }
  @media screen and (min-width: 440px) {
    display: none;
    visibility: hidden;
  }
`;
