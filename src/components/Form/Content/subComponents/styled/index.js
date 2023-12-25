import styled, { keyframes } from 'styled-components';



const InformativeCommercialAccount = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const colorChange = keyframes`
from {
  filter: grayscale(100%);
}
to {
  filter: grayscale(0%);
}
`;

const CheckIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0px;
  
`;

const StyledSvg = styled.svg`
filter: grayscale(100%);
  animation: ${colorChange} 3s ease forwards 0.3s; /* Aguarda 1 segundo antes de mudar a cor */
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Cor e opacidade do overlay */
  z-index: 999; /* Certifique-se de que o overlay esteja acima do conteúdo */
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 96%;
  text-align: left;

  p {
    margin: 10px 0;
  }
`;


const CloseButton = styled.button`
  background-color: #E63888;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width:100%;
  margin-top:20px;
  font-weight:bold;
  font-size:16px;
`;
const CloseIcon = styled.img`
position:absolute;
top:8px;
right:8px;
height:35px;
width:35px;
`
export {
  InformativeCommercialAccount, CheckIcon, StyledSvg, ModalWrapper, CloseButton, ModalOverlay,CloseIcon
}