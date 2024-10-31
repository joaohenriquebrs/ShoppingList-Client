import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Reference = styled.div`
  width: 0;
  height: 0;
`;

export const ContentContainer = styled.div`
  width: 100vw;
  height: 100%;
  padding: 70px 120px;

  @media (min-width: 1000px) and (max-width: 1200px) {
    padding: 60px 90px;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    padding: 40px 70px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    padding: 30px 60px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    padding: 30px 50px;
  }

  @media (max-width: 400px) {
    padding: 20px 25px;
  }
`;

export const TopContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftTopContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftTopImage = styled.div`
  margin-bottom: 10px;
  max-width: 570px;
`;

export const DateText = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: left;
  color: #000;
  margin-bottom: 5px;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const MainText = styled.div`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: #290742;
  margin-bottom: 15px;
  max-width: 570px;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 20px;
    line-height: 26px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const SubText = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #000;
  max-width: 570px;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 13px;
    line-height: 18px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
    line-height: 14px;
  }
`;

export const MainTextRight = styled.div`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: #290742;
  margin-bottom: 15px;
  width: 100%;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 12px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const SubTextRight = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #000;
  width: 100%;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 12px;
    line-height: 16px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
    line-height: 14px;
  }
`;

export const RightTopContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 600px) {
    flex-direction: row;
    width: 100%;
    border-top: 1px solid #f2e7fa;
    padding-top: 20px;
    gap: 30px;
  }
`;

export const FirstRightContainer = styled.div`
  display; flex;
  flex-direction: column;
  border-bottom: 1px solid #F2E7FA;
  padding-bottom: 30px;

  @media (max-width: 600px) {
    width: 50%;
    padding-bottom: 0px;
    border-bottom: none;
  }
`;

export const SecondRightContainer = styled.div`
  display; flex;
  flex-direction: column;
  padding-top: 30px;

  @media (max-width: 600px) {
    width: 50%;
    padding-top: 0px;
  }
`;

export const BottomContent = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 15px;

  @media (min-width: 600px) and (max-width: 1000px) {
    margin-top: 50px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const BlockBottom = styled.div`
  width: 33%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const BottomImage = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const MainTextBottom = styled.div`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: #290742;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 20px;
    line-height: 26px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const SubTextBottom = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #000;
  margin-bottom: 50px;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 13px;
    line-height: 18px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
    line-height: 14px;
    margin-bottom: 20px;
  }
`;

export const ButtonUpPage = styled.button`
  position: fixed;
  bottom: 20px;
  right: 40px;
  background-color: #9e6dc2;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #4fff4b;
    transform: scale(1.1);
  }

  svg {
    font-size: 20px;
  }
`;
