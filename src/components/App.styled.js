import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  margin: 0 auto;
  background-color: #e3f2fd;
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
