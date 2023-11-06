import styled from 'styled-components';
export const WrapRegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
  .box-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .textField {
    color: red;
    height: 50px;
  }
`;
export const TextField = styled.label`
  color: red;
  height: 50px;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  gap: 20px;
  .label-form {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
  }
`;
