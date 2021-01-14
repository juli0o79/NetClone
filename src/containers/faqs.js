import React from 'react';
import {Accordion, OptForm} from '../components';
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title> Perguntas Frequentes: </Accordion.Title>
            {faqsData.map((item)=>{
                return(
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                )
            })}
            <OptForm>
                <OptForm.Input placeholder="Endereço de email"/>
                <OptForm.Button>Experimente já</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Pronto para assistir? Crie uma conta com o seu email ou renove sua assinatura</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}