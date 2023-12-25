// src/components/HomeHeader.js
import React, { useState, useEffect } from 'react';
import ModalMenu from './subComponentes/modalMenu/modalMenu';
import { MenuIcon, LogoContainer, UserContainer, Container, MenuHamburguer, TextMenu } from './styled';
import serasaIcon from './media/serasa-white.svg'
import userIcon from './media/user-icon.svg'

const HomeHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.title = 'Últimos dias do Feirão Serasa Limpa Nome. Negocie agora suas dívidas.';
        return () => {
            document.body.classList.remove('page1');
            document.title = '';
        };
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Container>
                <MenuIcon onClick={toggleMenu}>
                    <MenuHamburguer>☰</MenuHamburguer>
                    <TextMenu>Menu</TextMenu>
                </MenuIcon>

                <LogoContainer>
                    <img src={serasaIcon} alt="Logo" />
                </LogoContainer>

                <UserContainer to="/login">
                    <img src={userIcon} />
                </UserContainer>
            </Container>

            <ModalMenu isOpen={isMenuOpen} onClose={toggleMenu} />
        </>
    );
};

export default HomeHeader;
