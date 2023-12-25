import { Link } from 'react-router-dom';
import styled from 'styled-components';



// Componente do ícone do menu
export const Container = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:0 16px;
   background-color: rgb(232, 0, 112);
   height:40px;
  
`
const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding:0px;
`;

const TextH1 = styled.h1`
  color:#fff;
  font-size:2rem;
  font-weight:700;
  line-height: 2.25rem;
  letter-spacing: -1px;
  text-align:left;
`;

// Componente do contêiner da logo
const LogoContainer = styled`
width:75px;
height:40px;
display: flex;
align-items: center;
  img {
    width: 52px; /* Ajuste conforme necessário */
    height: 24px;
  }
`;

// Componente do contêiner do usuário
const UserContainer = styled(Link)`
  display:flex;
  text-decoration:none;
`;

const TextMenu = styled.span`
margin-left:5px;
font-weight:500;
font-size:10px;
text-transform:uppercase;
font-family: Roboto, sans-serif;
color:#fff;
`;
const MenuHamburguer = styled.span`
  font-size:18px;
  color:#fff;
`;

export { MenuIcon, LogoContainer, UserContainer, MenuHamburguer, TextMenu };
