import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import HeaderContainer from '../containers/headerContainer';
import FooterContainer from '../containers/footerContainer';
import Form from '../components/form';
import {FirebaseContext} from '../context/firebaseContext';
import * as ROUTES from '../constants/routes';

export default function Signin(){

    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || username === '';

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Firebase auth
        firebase
            .auth()
            .signInWithEmailAndPassword(username,password)
            .then( () => {
                history.push(ROUTES.BROWSE);
            })
            .catch( (err) => {
                setUsername('');
                setPassword('');
                setError(err.message);
            })
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title> Sign In</Form.Title>
                    { error && <Form.Error> {error} </Form.Error>}
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Input 
                            placeholder="Enter email"
                            onChange = {({target}) => {setUsername(target.value)}}  
                            value = {username}
                        />
                        <Form.Input 
                            placeholder="Enter password" 
                            onChange = {({target}) => { setPassword(target.value)}}
                            type = "password"
                            value = {password}
                        />
                        <Form.Submit disabled ={isInvalid}> Sign In</Form.Submit>

                        <Form.Text> New to Netflix? 
                            <Form.Link to={ROUTES.SIGN_UP}> Sign Up</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                            <Form.Link> Learn more.</Form.Link>
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}