import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 110%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 110%;
  padding-top: 88px;
  position: absolute;
  z-index: 2;
  color: #fff;
  gap: 50px;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export const HeaderMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const TitleMainContent = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.7px;

  @media (max-width: 400px) {
    font-size: 18px;
    letter-spacing: 1px;
  }
`;
