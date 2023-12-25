import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height:5rem;
  border-top:solid 1px rgba(214,215,220);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding-top: 1rem;
  margin-top: auto;
  background: rgb(255,255,255);
  border-top: solid 1px rgba(214,215,220);
`;

const TextPrivacy = styled.p`
  font-size:16px;
  color:#00082699;
  font-family:Roboto,sans-serif;
`;

const LinkPrivacy = styled.a`
font-size:16px;
color:#E63888;;
font-family:Roboto,sans-serif;
font-weight:bold;
`;

export { FooterWrapper, TextPrivacy, LinkPrivacy };
