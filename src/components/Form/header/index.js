import React, { useContext } from 'react';
import serasaIcon from './media/serasa-icon.png';
import checkIcon from './media/check-icon.png';


import {
    HeaderForm,
    FlexContainer,
    IconBackButton,
    LogoImg,
    CheckUserIcon,
    Title,
    Status,
} from './styles/HeaderStyles';
import { AppContext } from '../../../contexts/AppContext';


export default function Header() {


    const {writing} = useContext(AppContext)
    return (
        <HeaderForm>
            <FlexContainer >
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"  version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>back</title><path fill="#FFF" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
            </FlexContainer>
            <FlexContainer >
                <LogoImg src={serasaIcon} alt="Serasa Logo" />
            </FlexContainer>
            <FlexContainer >
                <Title>Serasa</Title>
                <Status>{writing ? 'Digitando...' : 'Online'}</Status>
            </FlexContainer>
            <FlexContainer>
                <CheckUserIcon src={checkIcon} alt="Check Icon" />
            </FlexContainer>
        </HeaderForm>
    );
}
