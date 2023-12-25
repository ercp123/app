// HeaderStyles.js
import styled from 'styled-components';

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  padding:10px;
  background-color: #005e54;
  width: 100vw;
  height: 59px;
  position:fixed;
  top:0px;
  left:0px;
  right:0px;
  z-index:100;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction:column;
`;

export const IconBackButton = styled.span`
  width: 30px;
  height: 30px;
  background-image: url('data:image/svg+xml,<span data-icon="back" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>back</title><path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg></span>');
  display: inline-block;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left:5px;
  margin-right:5px;
`;

export const CheckUserIcon = styled.img`
  height: 19px;
  width: 19px;
  position: relative;
    top: -7px;
    left: 2px;

`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  color:#fff;
  margin-left:5px;

`;

export const Status = styled.span`
  font-size: 13px;
  color: #fff;
  margin-left:5px;
`;

// Exporte os estilos conforme necessário
