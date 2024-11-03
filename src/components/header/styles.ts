import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const HeaderDesktop = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;

  @media (min-width: 600px) {
    display: none;
  }
`;
