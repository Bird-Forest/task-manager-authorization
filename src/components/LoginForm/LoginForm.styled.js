import styled from 'styled-components';

export const LoginFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 100%;
  margin: 0;
  padding: 0;
  .input-form {
    border-radius: 25px;
    min-width: 264px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    color: #01579b;
    outline: none;
    border: 1px solid #2196f3;
    padding: 0 12px;
    margin: 0 auto;
    &::placeholder {
      font-size: 16px;
      color: #64b5f6;
    }
  }
  .btn-form {
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: white;
    border-radius: 25px;
    width: 100%;
    height: 40px;
    background-color: #2196f3;
    border: 1px solid #2196f3;
    margin: 0 auto;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #00b0ff;
      border: 1px solid #00b0ff;
    }
  }
`;
