import styled from 'styled-components';

export const FormTask = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  margin: 0 auto;
  padding: 0;
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
export const InputForm = styled.input`
  display: flex;
  background-color: #2196f3;
  color: white;
  width: 248px;
  height: 44px;
  font-size: 16px;
  font-weight: 500;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  border: 1px solid #2196f3;
  outline: #2196f3;
  padding: 0 0 0 16px;
  margin: 0 auto;
  @media screen and (min-width: 380px) {
    width: 300px;
  }
  @media screen and (min-width: 440px) {
    width: 360px;
  }
  @media screen and (min-width: 500px) {
    width: 420px;
  }
`;
export const BtnForm = styled.button`
  display: inline-block;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #2196f3;
  border: 1px solid #2196f3;
  outline: #2196f3;
  width: 60px;
  height: 45px;
  padding: 0;
  cursor: pointer;
  color: #1769aa;
  .icon-add {
    width: 28px;
    height: 28px;
    fill: white;
  }
  .icon-add:hover,
  .icon-add:focus {
    fill: #1769aa;
  }
`;
