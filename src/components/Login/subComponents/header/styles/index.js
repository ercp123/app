import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AreaHeader = styled(Link)`
    display:flex;
    webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 64px;
    align-items:center;
    background-color: #fff;
    border-bottom: solid 1px rgba(214,215,220);
    text-decoration:none!important;
    img {
        width:100px;
        height:43px;
    }
`
export {
    AreaHeader
}