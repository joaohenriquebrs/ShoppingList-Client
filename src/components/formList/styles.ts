import styled from "styled-components";

interface TitleBlockItemProps {
  isFocused: boolean;
}

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

export const BlockItem = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleBlockItem = styled.div<TitleBlockItemProps>`
    font-size: 12px;
    color: ${({ isFocused }) => (isFocused ? '#A881E6' : '#AFABB6')};
`;

export const InputNameItem = styled.input<TitleBlockItemProps>`
    background: #111112;
    border: 1px solid ${({ isFocused }) => (isFocused ? '#A881E6' : '#252529')};
    border-radius: 6px;
    width: 100%;
    height: 40px;
    color: #FFF;
    padding: 0px 8px;
    outline: none; 
    transition: border-color 0.4s ease; 
`;


export const BlockAmount = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BlockInputsAmount = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

export const InputAmountItem = styled.input<TitleBlockItemProps>`
  background: #111112;
  border: 1px solid ${({ isFocused }) => (isFocused ? '#A881E6' : '#252529')};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 52%;
  height: 40px;
  color: #FFF;
  padding: 0px 8px;
  outline: none; 
  transition: border-color 0.4s ease; 
`;

export const SelectAmountItem = styled.select<TitleBlockItemProps>`
  background: #17171A;
  border: 1px solid ${({ isFocused }) => (isFocused ? '#A881E6' : '#252529')};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 48%;
  height: 40px;
  color: #AFABB6;
  padding: 0px 8px;
  cursor: pointer;
  transition: border-color 0.4s ease; 
`;

export const OptionSelect = styled.option`
  color: #AFABB6;
`;

export const BlockCategory = styled.div`
  width: 26%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BlockPlusIcon = styled.div`
  display: flex;
  width: 5%;
  position: relative; 
`;

export const BlockPlusIconContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0; 
  width: 40px;
  border-radius: 99px;
  height: 40px;
  background: #7450AC;
  border: none;
  cursor: pointer;
`;