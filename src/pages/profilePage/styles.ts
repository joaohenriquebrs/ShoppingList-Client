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

export const ProfileInfo = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 8px;
  color: #eaeaea;
  font-size: 16px;
  line-height: 1.6;

  p {
    margin: 8px 0;
  }

  strong {
    color: #7450ac;
  }
`;

export const ActionButton = styled.a`
  padding: 12px 24px;
  background: #7450ac;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    transform 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #6e4ca3;
    transform: scale(1.05);
  }
`;

export const TitleProfile = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #7450ac;
`;
