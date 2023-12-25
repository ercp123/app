import styled from 'styled-components';


const Wrapper = styled.div`
  padding:16px;
  margin-top:32px;
text-align: center;
`;

const Title = styled.h1`
  color: rgba(0,8,38,0.8);
  font-size:24px;
  margin:0 0 16px;
  font-family:Roboto, sans-serif;
  font-weight:bold;
  -webkit-font-smoothing:antialiased;
`;

const Description = styled.p`
  color: #00082699;
  font-size:16px;
  font-family:Roboto,sans-serif;
  margin:0 0 24px;
`;

const Label = styled.label`
color: rgba(0,8,38,0.8);
font-size:16px;
font-family:Roboto,sans-serif;
font-weight:600;
margin:0 0 8px;
display:flex;
`;

const WarningIcon = styled.img`
width:24px;
height:24px;

`;

const AreaInput = styled.div`
    box-shadow:${(props) => (props.invalid ? ' 0 0px 1px 2px rgba(214,16,59,0.3)' : '')};
    border: 1px solid ${(props) => (props.invalid ? 'rgba(214,16,59,0.3)' : 'rgba(212,218,224)')};
    border-radius: 10px;
    transition-property: border,box-shadow;
    display: flex;
    z-index: 2;
    padding: 8px;
    align-items:center;
`;

const WrapperInput = styled.div``;
const Input = styled.input`
  outline: none;
  border: none;
  padding: 12px;
  width: 95%;
  z-index: 1;
  &::placeholder {
    color: rgba(0,8,38,0.6)!important;
    font-size: 16px!important; 
    line-height:24px!important;
    font-weight:400!important;
  }
 
`;



const ErrorMessage = styled.p`
  color: rgb(214,16,59);
  font-weight:bold;
  font-size:12px;
  display:block;
  text-align:left;
  margin-top:5px;
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 13.5px 20px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#E63888')};
  color: #fff;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
    justify-content: center;
    font-size:16px;
    font-weight:600;
    border-radius:10px;
`;


export { Wrapper, Title, Description,WarningIcon, Label, Input, ErrorMessage, Button, AreaInput, WrapperInput }