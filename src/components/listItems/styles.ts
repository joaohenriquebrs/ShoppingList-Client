import styled from 'styled-components';

export const ListItemsContainer = styled.div`
  width: 100%;
`;

export const ButtonDeleteSelected = styled.button`
  position: absolute;
  top: 29%;
  right: 0%;
  background: #d9534f;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 16px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
      background: #c9302c;
  }
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