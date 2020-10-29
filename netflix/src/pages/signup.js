import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import HeaderContainer from '../containers/headerContainer';
import FooterContainer from '../containers/footerContainer';
import Form from '../components/form';
import {FirebaseContext} from '../context/firebaseContext';
import * as ROUTES from '../constants/routes';


export default function Signup(){

    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const {firebase} = useContext(FirebaseContext);
    const isInvalid = firstName === '' || email === '' || password === '';

    const handleSubmit = (event) => {
        event.preventDefault();
        const photo = Math.floor(Math.random()*5)+1;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((result) => {
                result.user.updateProfile({
                    displayName : firstName,
                    photoURL : photo,
                }).then( ()=> {
                    history.push(ROUTES.BROWSE);
                })
            })
            .catch((err) =>{
                setFirstName('');
                setEmail('');
                setPassword('');
                setError(err.message);
            })
            
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title> Sign Up</Form.Title>
                    
                    <Form.Base onSubmit = {handleSubmit}>
                        <Form.Input 
                            placeholder = "First Name"
                            value = {firstName}
                            onChange = { ({target}) => {setFirstName(target.value)}}
                        />

                        <Form.Input 
                            placeholder = "Email address"
                            value = {email}
                            onChange = { ({target}) => {setEmail(target.value)}}
                        />

                        <Form.Input 
                            placeholder = "Password"
                            type = "password"
                            value = {password}
                            onChange = { ({target}) => {setPassword(target.value)}}
                        />

                        <Form.Submit type ="submit" disabled = {isInvalid}> SignUp </Form.Submit>
                    
                        <Form.Text> Already have an account? 
                            <Form.Link to={ROUTES.SIGN_IN}> Sign In</Form.Link>
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