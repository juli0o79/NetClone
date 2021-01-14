import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import {Form} from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup(){
    
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    console.log(firebase.auth().currentUser)

    const [firstName, setFirstName] = useState('');
    const [emailAdress, setEmailAdress] = useState ('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === "" || password === "" || emailAdress === "";
    const handleSignup = (e) => {
        e.preventDefault();

        //Fazer inscrição no firebase

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAdress, password)
            .then((result)=>{
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(()=>{
                        history.push(ROUTES.BROWSE);
                    })
            })
            .catch((error)=>{
                setEmailAdress("");
                setPassword("");
                setError(error.message);
            })

    }


    return (
    <>   
        <HeaderContainer>
            <Form>
                <Form.Title>Seja Membro</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup}>
                    <Form.Input placeholder= "Seu Nome" value = {firstName} onChange={({target}) => setFirstName(target.value)} />
                    <Form.Input placeholder = "Seu email" value = {emailAdress} onChange = {({ target }) => setEmailAdress(target.value)} />
                    <Form.Input type="password" placeholder = "senha" value = {password} onChange = {({target}) => setPassword(target.value)} />

                    <Form.Text>Já é membro? <Form.Link to="/signin">Acesse.</Form.Link></Form.Text>
                    <Form.TextSmall>Essa página é protegida e tem seus direitos reservados. Saiba mais.</Form.TextSmall>
                </Form.Base>
                <Form.Submit disabled = {isInvalid} type = "submit" onClick= {handleSignup}>Cadastrar</Form.Submit>
            </Form>
        </HeaderContainer>
        <FooterContainer />
    </>
    )
}