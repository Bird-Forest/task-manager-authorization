import styled from 'styled-components';

export const WrapList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
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

export const WrapTask = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-width: 300px; */
  /* width: 100%; */
  height: 44px;
  /* padding: 0;
  margin: 0 auto; */
`;

export const TextTask = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* width: 100%; */
  background-color: ${props => props.color};
  border-radius: 25px;
  border: 1px solid #2196f3;
  padding: 0;
  margin: 0 auto;
`;
export const Text = styled.h4`
  display: inline-block;
  width: 248px;
  font-size: 16px;
  font-weight: 500;
  color: #2c387e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0 0 0 16px;
  @media screen and (min-width: 380px) {
    width: 300px;
  }
  @media screen and (min-width: 440px) {
    width: 360px;
  }
  @media screen and (min-width: 500px) {
    width: 404px;
  }
`;

export const BtnSetting = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-block;
  background-color: #2196f3;
  border: 1px solid #2196f3;
  outline: #2196f3;
  width: 60px;
  height: 44px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  .icon-setting {
    width: 28px;
    height: 28px;
    fill: white;
  }
  .icon-setting:hover,
  .icon-setting:focus {
    fill: #1769aa;
  }
`;

export const SettingTask = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  background-color: #2196f3;
  color: white;
  width: 250px;
  height: 44px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  border: 1px solid #2196f3;
  padding: 0;
  margin: 0;
  position: absolute;
  transform: translate(0, 0);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  right: 0;
`;

export const BtnStatus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #2196f3;
  border-radius: 50%;
  background-color: ${props => props.color};
  .icon-color {
    width: 24px;
    height: 24px;
    fill: #2196f3;
  }
  .icon-color:hover,
  .icon-color:focus {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  border: 2px solid #2196f3;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  .icon-delete {
    width: 20px;
    height: 20px;
    fill: #2196f3;
  }
  .icon-delete:hover,
  .icon-delete:focus {
    fill: #1769aa;
  }
  @media screen and (min-width: 600px) {
    width: 40px;
    height: 40px;
    .icon-delete {
      width: 24px;
      height: 24px;
    }
  }
`;
