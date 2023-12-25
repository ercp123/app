import React, { useState, useContext } from 'react';
import { AppContext } from '../../../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import {
    Wrapper,
    AreaInput,
    Title,
    Description,
    WarningIcon,
    Label,
    Input,
    ErrorMessage,
    Button,
    WrapperInput,
} from './styled';
import warningIcon from './media/warning-icon.svg';

const FormComponent = () => {
    const [cpf, setCpf] = useState('');
    const [isValidCpf, setIsValidCpf] = useState(false); // Inicializado como true para não mostrar mensagem inicialmente
    const [isCpfTouched, setIsCpfTouched] = useState(false);
    const history = useNavigate();
    const { setGlobalCPF } = useContext(AppContext);

    const handleCpfChange = (e) => {
        const inputCpf = e.target.value;
        const numericCpf = inputCpf.replace(/\D/g, '');
        const maskedCpf = numericCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

        setCpf(maskedCpf);
        setGlobalCPF(maskedCpf);
    };

    const handleBlur = (e) => {
        const inputCpf = e.target.value;
        const numericCpf = inputCpf.replace(/\D/g, '');
        const isValid = validateCpf(numericCpf);
        setIsValidCpf(isValid);
        setIsCpfTouched(true);
    };

    const validateCpf = (cpf) => {
        // Lógica de validação do CPF
        const cpfRegex = /^[0-9]{11}$/;

        if (!cpfRegex.test(cpf)) {
            return false;
        }

        const cpfArray = cpf.split('').map(Number);

        // Verifica se todos os dígitos são iguais, o que torna o CPF inválido
        if (new Set(cpfArray).size === 1) {
            return false;
        }

        // Verifica os dígitos verificadores
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += cpfArray[i] * (10 - i);
        }

        let mod = sum % 11;
        const digit1 = mod < 2 ? 0 : 11 - mod;

        if (cpfArray[9] !== digit1) {
            return false;
        }

        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += cpfArray[i] * (11 - i);
        }

        mod = sum % 11;
        const digit2 = mod < 2 ? 0 : 11 - mod;

        return cpfArray[10] === digit2;
    };


    const handleContinueClick = () => {
        if (isValidCpf) {
            history('/form');
        } else {
            console.log('CPF inválido');
        }
    };

    return (
        <Wrapper>
            <Title>Entrar no Serasa</Title>
            <Description>Olá! Identifique-se para acessar sua conta Serasa.</Description>

            <WrapperInput>
                <Label>CPF</Label>
                <AreaInput invalid={!isValidCpf && isCpfTouched}>
                    <Input
                        type="text"
                        value={cpf}
                        onChange={handleCpfChange}
                        onBlur={handleBlur}
                        placeholder="Digite seu CPF"
                        className="cpf"
                    />

                    {!isValidCpf && isCpfTouched && <WarningIcon src={warningIcon} />}
                </AreaInput>
                {!isValidCpf && isCpfTouched && <ErrorMessage>CPF inválido</ErrorMessage>}
            </WrapperInput>

            <Button disabled={!isValidCpf} onClick={handleContinueClick}>
                Continuar
            </Button>
        </Wrapper>
    );
};

export default FormComponent;
