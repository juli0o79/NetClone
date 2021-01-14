import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {


    //usando método históry do react-router para manipular a navegção
    const history = useHistory();

    // destructuring do firebase do context, o valor do context foi atribuído no provider lá na index

    const { firebase } = useContext(FirebaseContext);
    console.log(firebase.auth)
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //Validação de elementos do formulário

    //No form input está sendo feito o destructuring do target no onchange (isso é possível, estudar mais a respeito)

    //validação simples: Se email ou senha estiverem vazios, is invalid = true
    //isso desabilita o botão de submit que tem um disabled

    const isInvalid = password === "" || emailAdress === "";

    const handleSignin = (e) => {
        e.preventDefault();

        // autenticção do firebase vai acontecer aqui

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAdress, password)
            .then(() => {
                // ir para a página de pesquisa
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAdress('');
                setPassword('');
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>
                        Entrar
                 </Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input placeholder="Endereço de email" value={emailAdress} onChange={({ target }) => setEmailAdress(target.value)} />
                        <Form.Input type="password" placeholder="Senha" autoComplete="off" value={password} onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit disabled={isInvalid} type="submit">Entrar</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Novo no NetClone? <Form.Link to="/signup">Seja membro.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>Essa página é protegida e tem seus direitos reservados. Saiba mais.</Form.TextSmall>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    )
}