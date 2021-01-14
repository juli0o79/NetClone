import React from 'react';
import {OptForm, Feature} from '../components'
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
    //componente feature, por ser menor, está sendo chamado diretamente na home
    return (
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>
                        Filmes e Séries ilimitados, programas de tv e mais.
                    </Feature.Title>
                    <Feature.Subtitle>
                        Assista em qualquer lugar, cancele a qualquer momento.
                    </Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="Endereço de email"/>
                        <OptForm.Button>Experimente já</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Pronto para assistir? Crie uma conta com o seu email ou renove sua assinatura</OptForm.Text>
                    </OptForm>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}