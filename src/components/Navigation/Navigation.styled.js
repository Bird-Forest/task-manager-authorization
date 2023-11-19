import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1769aa;
  min-width: 320px;
  height: 64px;
  padding: 0 10px;
  margin: 0 auto;
  @media screen and (min-width: 380px) {
    min-width: 380px;
  }
  @media screen and (min-width: 440px) {
    min-width: 440px;
  }
  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  .navigate {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: white;
    &.active {
      color: #2196f3;
    }
  }
`;
