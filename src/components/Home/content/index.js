// src/components/HomeHeader.js
import React, { useState } from 'react';
import {
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
} from './styled';
import banner from './media/banner.png'
import contaBancaria from './media/conta-bancaria.svg';
import parcelaImg from './media/parcela-de-negocios.svg';
import pixImg from './media/pix-image.svg'

const Content = () => {
    return (
        <>
            <MainContant>
                <AreaTexts>
                    <TextH1>Últimos dias do Feirão Limpa Nome</TextH1>
                    <DescriptionText>Negociação de dívidas com desconto e em até 72x*, aproveite!</DescriptionText>
                </AreaTexts>
                <AreaContagemDays>
                    <Text>Faltam</Text>
                    <TextoDestacado><span>0</span></TextoDestacado>
                    <TextoDestacado><span>3</span></TextoDestacado>
                    <Text>dias para terminar</Text>
                </AreaContagemDays>
                <AreaBanner>
                    <img src={banner} />
                </AreaBanner>
                <AreaButton>
                    <ButtonConsult to="/login">
                        <span>Consultar ofertas</span>
                    </ButtonConsult>
                </AreaButton>
            </MainContant>
            <SecondSection>
                <AreaTextDesenrola>
                    <span>
                        O Serasa Limpa Nome não se confunde com a plataforma oficial do Desenrola Brasil, programa governamental. As condições comerciais para pagamento das dívidas são definidas exclusivamente pelos credores, e as ofertas do Limpa Nome e do Desenrola podem diferir – verifique.
                    </span>
                </AreaTextDesenrola>
            </SecondSection>


   
            <ThirdSection>
                <KnowMoreSection>
                    <img src={contaBancaria} />
                    <KnowMoreText>
                        <KnowMoreTitle>Descontos de até 99%</KnowMoreTitle>
                        <KnowMoreDescription>Mais de 11 milhões de ofertas com descontos acima de 90%. Uma ou mais podem ser suas!</KnowMoreDescription>
                    </KnowMoreText>
                </KnowMoreSection>

                <KnowMoreSection>
                    <img src={parcelaImg} />
                    <KnowMoreText>
                        <KnowMoreTitle>Negocie dívidas de energia</KnowMoreTitle>
                        <KnowMoreDescription>Quase 600 empresas parceiras, entre elas concessionárias como Enel, Light e Neoenergia</KnowMoreDescription>
                    </KnowMoreText>
                </KnowMoreSection>

                <KnowMoreSection>
                    <img src={pixImg} />
                    <KnowMoreText>
                        <KnowMoreTitle>Pague em até 72x e no Pix</KnowMoreTitle>
                        <KnowMoreDescription>Opções de parcelamento (que pode chegar a 72 vezes) ou pagamento à vista no Pix ou boleto</KnowMoreDescription>
                    </KnowMoreText>
                </KnowMoreSection>
            </ThirdSection>
        </>
    );
};

export default Content;
