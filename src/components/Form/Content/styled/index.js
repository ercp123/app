import styled, { keyframes } from 'styled-components';


const ContentWrapper = styled.div`
background-image: url(${require('../media/background.jpg')});
width:100%;
height:100vh;
padding-top:50px;
padding-left:12px;
padding-right:12px;
`;

const InformativeCommercialAccount = styled.div`
display: flex;
align-items: center;
gap: 4px;
background-color: #d5f4f0;
border-radius: 10px;
padding: 10px;
width: 100%;
max-width: 450px;
margin: 2rem auto 0.5rem;

`

const ErrorMessage = styled.p`
  color: rgb(214,16,59);
  font-weight:bold;
  font-size:12px;
  display:block;
  text-align:left;
  margin-top:5px;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MessageWhatsapp = styled.div`
background: #FFF;
padding: 15px;
border-radius: 10px;
margin-top:10px;
box-shadow:0 0 2px 1px rgba(0, 0, 0, 0.1);
position:relative;
&:last-child {
  margin-bottom:50px;
}
animation: ${fadeIn} 0.5s ease;
 span {
    font-size:14px;
    font-family:Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif};
    color:#53676b;

`;

export {
    ContentWrapper, InformativeCommercialAccount, MessageWhatsapp,ErrorMessage
}