import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
z-index: 2;
position: fixed;
width: 100%;
top: 0px;
left: 0px;
right: 0px;
width: 100%;
background: rgba(255, 255, 255, 0.8); /* Cor branca com opacidade */

`;

const LoaderSpinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid rgb(232, 0, 112);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
};

export default Loader;
