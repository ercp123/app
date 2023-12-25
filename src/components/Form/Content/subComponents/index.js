import React, { useContext } from 'react';
import { CheckIcon, StyledSvg, ModalWrapper, CloseButton, ModalOverlay, CloseIcon } from './styled';
import { MessageWhatsapp } from '../styled';
import { AppContext } from '../../../../contexts/AppContext';
import closeIcon from './media/close-icon.svg';

const WelcomeMessage = ({ nomeCompleto }) => {

    const { globalCPF } = useContext(AppContext)
    return (
        <MessageWhatsapp>



            <p><b>{nomeCompleto}</b>, seja bem-vindo(a) ao atendimento virtual do feirão <b>Serasa Limpa Nome!</b></p>

            <CheckComponent />

        </MessageWhatsapp>
    );
};


const CheckComponent = () => {
    return (
        <CheckIcon>
            <StyledSvg
                id="checkIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 38.626 24.684"
                height="20"
                width="18"
            >
                <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
                    <path
                        id="Caminho_6"
                        data-name="Caminho 6"
                        d="M728.035,623.468l1.382,1.482,17.929-20.334"
                        transform="translate(-1.937 -1.117)"
                        fill="none"
                        stroke="#53bdeb"
                        strokeLinecap="round"
                        strokeWidth="3"
                    ></path>
                    <path
                        id="Caminho_7"
                        data-name="Caminho 7"
                        d="M712.017,616.07l7.088,8.039,17.757-20.14"
                        transform="translate(-1 -0.469)"
                        fill="none"
                        stroke="#53bdeb"
                        strokeLinecap="round"
                        strokeWidth="3"
                    ></path>
                </g>
            </StyledSvg>
        </CheckIcon>
    );
};


const Modal = ({ onClose }) => {
    const { showModal, setModal } = useContext(AppContext);
    return (
        <ModalOverlay>
            <ModalWrapper>
                <div>
                    <p>Acordo: <b>98P40GR3550</b></p>
                    <p>Valor Total da Dívida: <b>R$ 1.983,52</b></p>
                    <p>Desconto Total: <b>98,7% (R$ {(1983.52 - 152.83).toFixed(2)})</b></p>

                    <p style={{ marginBottom: '40px', marginTop: '40px', position: 'relative' }}>
                        <b style={{ fontWeight: 'bold' }}>VALOR PARA QUITAR: </b>
                        <span style={{ backgroundColor: 'yellow', padding: '0 5px' }}>R$ 152,83</span>
                    </p>
                    <p>Data de Vencimento: 24/12/23 (23:59)</p>
                </div>
                <CloseButton onClick={onClose}>Limpar nome</CloseButton>
                <div onClick={() => { setModal(false);console.log(showModal) }}>
                    <CloseIcon src={closeIcon} ></CloseIcon>
                </div>

            </ModalWrapper >
        </ModalOverlay >

    );
};


export { WelcomeMessage, CheckComponent, Modal };



