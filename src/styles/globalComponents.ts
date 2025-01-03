import styled from 'styled-components';
import { TextProps } from 'services/interfaces';

export const CustomText = styled.p<TextProps>`
  text-align: ${(props) => props.align || 'center'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  width: ${(props) => props.width || 'auto'};
  font-family: ${(props) => (props.secondary ? 'Open Sans' : 'Outfit')};

  font-weight: ${(props) =>
    (props.bold && 800) ||
    (props.semiBold && 600) ||
    (props.regular && 400) ||
    400};

  font-size: ${(props) =>
    props.size ||
    (props.bold && '20px') ||
    (props.semiBold && '18px') ||
    '16px'};

  color: ${(props) =>
    ({ theme }) =>
      (props.blue && theme.colors.blue) ||
      (props.black && theme.colors.black) ||
      (props.white && theme.colors.white) ||
      theme.colors.black};

  align-self: ${(props) => props.alignSelf || 'auto'};
  opacity: ${(props) => props.opacity || 1};
`;
