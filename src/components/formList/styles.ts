import styled from "styled-components";

interface TitleBlockItemProps {
  isFocused: boolean;
}

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const BlockItem = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1000px) {
    width: 100%;
  }
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

  @media (max-width: 1000px) {
    width: 36%;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    width: 40%;
  }
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

  @media (min-width: 800px) and (max-width: 1000px) {
    width: 50%;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    width: 46%;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 40%;
  }

  @media (max-width: 400px) {
    width: 43%;
  }
`;

export const BlockPlusIcon = styled.div`
  display: flex;
  width: 5%;
  position: relative; 
`;

export const ButtonPlusIconContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0; 
  width: 40px;
  height: 40px;
  border-radius: 99px;
  background: #7450AC;
  border: none;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 36px;
    height: 36px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 10px;
  position: absolute;
  top: 27.2%;
`;


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 30%;
  padding: 20px;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
  }

  @media (min-width: 1600px) {
    width: 20%;
  }

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  color: #7450AC;
  text-align: center;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #7450AC;
  color: #7450AC;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
      background-color: #7450AC;
      color: white;
  }
`;



/* Mobile Responsiveness */
export const MobileResposiveness = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const TopFormContainer = styled.div`
  width: 100%;
`;

export const BottomFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 15px;
`;
