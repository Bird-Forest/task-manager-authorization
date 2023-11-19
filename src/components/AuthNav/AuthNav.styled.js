import styled from 'styled-components';
export const WrapAuthNav = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin: 0;
  padding: 0;
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
