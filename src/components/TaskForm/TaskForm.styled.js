import styled from 'styled-components';

export const FormTask = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-width: 300px; */
  /* gap: 10px; */
  padding: 0;
  /* margin: 0 auto; */
  /* margin-right: auto;
  margin-left: auto; */
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
  min-width: 220px;
  height: 44px;
  font-size: 16px;
  font-weight: 500;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  border: 1px solid #2196f3;
  outline: #2196f3;
  padding: 0 16px;
  margin: 0;
  @media screen and (min-width: 380px) {
    min-width: 300px;
  }
  @media screen and (min-width: 440px) {
    min-width: 360px;
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
  height: 46px;
  padding: 0;
  cursor: pointer;
  color: #1769aa;
  /* -webkit-box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75); */

  /* &:hover,
  :focus {
    background-color: rgb(77, 106, 255);
    outline: 3px solid rgb(77, 106, 255);
    border: 3px solid rgb(77, 106, 255);
  } */
  .icon-add {
    width: 28px;
    height: 28px;
    fill: white;
  }
  .icon-add:hover,
  .icon-add:focus {
    fill: #1769aa;
  }
  /* @media screen and (min-width: 600px) {
    width: 48px;
    height: 48px;
  } */
`;
