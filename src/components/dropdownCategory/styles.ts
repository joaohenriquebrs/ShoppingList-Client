import styled from 'styled-components';

interface TitleBlockItemProps {
  isFocused: boolean;
}

export const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 100%;
  cursor: pointer;
  background: #17171A;
  border: 1px solid ${({ isOpen }) => (isOpen ? '#A881E6' : '#252529')};
  border-radius: 6px;
  padding: 10px;
  color: #AFABB6;
  transition: 0.4s ease; 
`;

export const SelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextMainSelect = styled.div`
  color: #FFF;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #17171A;
  border: 1px solid #252529;
  border-radius: 6px;
  margin-top: 4px;
  z-index: 10;
`;

export const TextDropDownText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #FFF;
`;

export const DropdownListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #252529;

  &:hover {
    background-color: #252529;
  }
`;

export const CheckSpan = styled.span`
  color: #A881E6;
`;

export const TitleBlockItem = styled.div <{ isOpen: boolean }> `
    font-size: 12px;
    color: ${({ isOpen }) => (isOpen ? '#A881E6' : '#AFABB6')};
`;