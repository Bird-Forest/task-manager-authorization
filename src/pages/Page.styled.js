import styled from 'styled-components';

export const WrapTasksPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  margin: 64px auto;
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
export const WrapRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 72px 0 0 0;
  background-color: #e3f2fd;
`;
export const TitleRegisterPage = styled.h2`
  font-size: 24px;
  color: #1769aa;
  padding: 0;
  margin: 0;
`;
export const WrapLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 72px 0 0 0;
`;
export const TitleLoginPage = styled.h2`
  font-size: 24px;
  color: #1769aa;
  padding: 0;
  margin: 0;
`;
