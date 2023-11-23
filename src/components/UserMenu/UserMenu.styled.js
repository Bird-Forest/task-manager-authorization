import styled from 'styled-components';

export const WrapUserMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 230px;
  gap: 10px;
  margin: 0;
  @media screen and (min-width: 380px) {
    margin: 0 0 0 60px;
  }
  @media screen and (min-width: 440px) {
    margin: 0 0 0 40px;
  }
  @media screen and (min-width: 500px) {
    margin: 0 0 0 80px;
  }
`;

export const BtnAll = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #2c387e;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid white;
  cursor: pointer;
  padding: 0;
  margin: 0;
  /* @media screen and (min-width: 440px) {
    width: 40px;
    height: 40px;
  } */
`;
export const BtnRed = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #2c387e;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ff5252;
  border: 1px solid #ff5252;
  cursor: pointer;
  padding: 0;
  margin: 0;
  /* @media screen and (min-width: 440px) {
    width: 40px;
    height: 40px;
  } */
`;
export const BtnYellow = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #2c387e;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ffee58;
  border: 1px solid #ffee58;
  cursor: pointer;
  padding: 0;
  margin: 0;
  /* @media screen and (min-width: 440px) {
    width: 40px;
    height: 40px;
  } */
`;
export const BtnGreen = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #2c387e;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #00e676;
  border: 1px solid #00e676;
  cursor: pointer;
  padding: 0;
  margin: 0;
  /* @media screen and (min-width: 440px) {
    width: 40px;
    height: 40px;
  } */
`;

export const BtnLogOut = styled.button`
  display: block;
  background-color: #1769aa;
  border: #1769aa;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  .icon-out {
    background-color: #1769aa;
    width: 32px;
    height: 32px;
    fill: white;
  }
  /* @media screen and (min-width: 440px) {
    .icon-out {
      width: 36px;
      height: 36px;
    }
  } */
`;
