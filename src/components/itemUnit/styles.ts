import styled from 'styled-components';

interface CategoryItemProps {
  background?: string;
  color?: string;
}

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

export const ConfigurationItemButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  cursor: pointer;
  border: none;
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
`;