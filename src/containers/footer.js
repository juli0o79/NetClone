import React from 'react';
import {Footer} from '../components'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>
                Dúvidas? Entre em contato
            </Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investidores</Footer.Link>
                    <Footer.Link href="#">Formas de assistir</Footer.Link>
                    <Footer.Link href="#">Informações</Footer.Link>
                    <Footer.Link href="#">Originais da NetClone</Footer.Link>   
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="#">Centro de ajuda</Footer.Link>
                    <Footer.Link href="#">Oportunidades</Footer.Link>
                    <Footer.Link href="#">Termos de uso</Footer.Link>
                    <Footer.Link href="#">Contato</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Conta</Footer.Link>
                    <Footer.Link href="#">Resgatar Presentes</Footer.Link>
                    <Footer.Link href="#">Privacidade</Footer.Link>
                    <Footer.Link href="#">Teste de Velocidade</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Centro de Mídia</Footer.Link>
                    <Footer.Link href="#">Adquirir Presentes</Footer.Link>
                    <Footer.Link href="#">Informações do Cookie</Footer.Link>
                    <Footer.Link href="#">Direitos Autorais</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>NetClone Brasil</Footer.Text>
        </Footer>
    )
}