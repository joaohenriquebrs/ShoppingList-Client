import styled from 'styled-components';
import { CategoryItemProps } from 'services/interfaces';

export const ItemUnitContainer = styled.div<{ isChecked: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 100%;
  background: #17171A;
  opacity: ${({ isChecked }) => (isChecked ? '0.5' : '1')};
  height: 68px;
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputCheckBox = styled.input`
  display: none;
`;

export const Label = styled.label`
  width: 20px; 
  height: 20px; 
  background: none;
  border: 1px solid #A881E6;
  border-radius: 2px; 
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${InputCheckBox}:checked + & {
    background: #2F723D; 
    border: none;

    &::after {
      content: '✔';
      width: 1.5px;
      height: 9px;
      margin: 0px 10px 14px 0px;
    }
  }
`;

export const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const NameItem = styled.div<{ isChecked: boolean }>`
  font-size: 14px;
  font-weight: ${({ isChecked }) => (isChecked ? '400' : '700')};
  color: #FBF9FE;
  letter-spacing: 0.4px;
  position: relative;

  // &::before {
  //     content: '';
  //     position: absolute;
  //     left: 0;
  //     top: 50%;
  //     transform: translateY(-50%);
  //     width: 100%;
  //     height: 1px;
  //     background-color: white;
  //     z-index: -1;
  //     opacity: ${({ isChecked }) => (isChecked ? '1' : '0')};
  //     transition: 0.4s ease;
  // }
`;

export const AmountItem = styled.div`
  font-size: 12px;
  color: #AFABB6;
  letter-spacing: 0.4px;
`;

export const ConfigurationItemButton = styled.button<{ isDisabled?: boolean }>`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;

export const CategoryItem = styled.div<CategoryItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  gap: 5px;
  color: ${({ color }) => color || '#E07B67'};
  background: ${({ background }) => background || '#261A17'};
  padding: 8px 16px;
`;

export const CategoryItemName = styled.div<{ color?: string }>`
  font-size: 12px;
  letter-spacing: 0.4px;
  color: ${({ color }) => color || '#E07B67'};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999;
`;

export const ModalContainer = styled.div`
    background: #17171A;
    width: 90%;
    max-width: 500px;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
`;

export const ModalText = styled.p`
    font-size: 22px;
    color: #FFF;
    margin-bottom: 10px;
`;

export const ModalButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    width: 100%;
`;

export const CancelButton = styled.button`
    background: #ddd;
    color: #000;
    padding: 10px 0px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    width: 50%;

    &:hover {
        background: #bbb;
    }
`;

export const ConfirmButton = styled.button`
    background: #7450AC;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    width: 50%;

    &:hover {
        background: #6E4CA3;
    }
`;

export const InputEditItem = styled.input`
  background: #111112;
    border: 1px solid #252529;
    border-radius: 6px;
    width: 100%;
    height: 40px;
    color: #FFF;
    padding: 0px 8px;
    outline: none; 
    transition: border-color 0.4s ease; 
`;