// src/components/modals/ModalMenu.js
import React from 'react';
import { Overlay, ModalContainer } from '../modalMenu/styled/modalMenu.styles';

const ModalMenu = ({ isOpen, onClose }) => {
    return (
        <Overlay isopen={isOpen}>
            <ModalContainer>
                <h2>Conteúdo do Menu</h2>
                <button onClick={onClose}>Fechar Menu</button>
            </ModalContainer>
        </Overlay>
    );
};

export default ModalMenu;
