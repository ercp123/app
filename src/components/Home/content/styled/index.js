// styles.js
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContant = styled.div`
  /* Your container styles go here */

  padding-top:1.5rem;
  padding:1.5rem 1rem;
  background-color: rgb(232, 0, 112);
`;

const AreaTexts = styled.div`
    display:flex;
    flex-direction:column;
`;
const AreaBanner = styled.div`
width:100%;
display:flex;
justify-content:center;
margin-top:16px;
img {
  width:200px;
  height:180px;
}
`;

const TextH1 = styled.h1`
font-weight:700;
color:#fff;
line-height: 2.25rem;
letter-spacing: -1px;
font-size:2rem;
`;

const DescriptionText = styled.p`
margin-top:1rem;
margin-bottom:1rem;
font-size:1.125rem;
color:#fff;
`;

const AreaContagemDays = styled.div`
display:flex;
align-items:center;
  
`;

const Text = styled.p`
font-size:16px;
font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
color:#fff;
`;

const TextoDestacado = styled.span`
height: 32px;
    width: 30px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 2.5px;



span{
  font-size:24px;
  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color:#e40781;
}
`;


const AreaButton = styled.div`
padding: 16px;
display: flex;
align-items: center;
background: #fff;
border-radius: 15px;
position: relative;
bottom: -55px;
  `;

const ButtonConsult = styled(Link)`
  padding:16px;
  width:100%;
  background-color: #D82B80;
  border-radius: 32px;
  justify-content: center;
  display: flex;
  align-items:center;
  text-decoration:none!important;
  span {
    font-weight:700;
    color:#fff;
  }
`;
const AreaTextDesenrola = styled.div`
  margin-top:50px;
  span {
    font-size: .875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: .28px;
    font-family: Roboto,sans-serif;
    color:rgba(0, 0, 0, 0.8);
 
  }

`;
const SecondSection = styled.div`
 
  padding:24px 16px;
  background:#EEEEEE;
`;









const ThirdSection = styled.div`
  padding:16px;
  display:flex;
  flex-direction:column;
`;

const KnowMoreSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding:10px;
  height:104px;
  img {
    width:64px;
    height:64px;
  }
`;
const KnowMoreText = styled.div`
    display:flex;
    flex-direction:column;
    height:104px;
    justify-content: space-between;
    margin-left:16px;
`;

const KnowMoreTitle = styled.h2`
  font-weight:700;
  font-size:18px;
  color:#343950;
`;

const KnowMoreDescription = styled.p`
color:#00082699;
font-size:14px;
`;


export {
  MainContant,
  AreaTexts,
  TextH1,
  DescriptionText,
  AreaContagemDays,
  Text,
  TextoDestacado,
  AreaBanner,
  AreaButton,
  ButtonConsult,
  AreaTextDesenrola,
  SecondSection,
  ThirdSection,
  KnowMoreText,
  KnowMoreTitle,
  KnowMoreDescription,
  KnowMoreSection
};
