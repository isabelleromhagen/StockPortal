import React, { useState, useEffect } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';

const RegistrationPage = ({goToLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [secretWord, setSecretWord] = useState('');
    const [gdpr, setGdpr] = useState(false);
    const [isDisabled, setDisabled] = useState(true);

    useEffect (()=>{
        if(gdpr && (email.endsWith('.com')) && (password.length,password2.length) >5){
            setDisabled(false);
        }
    })

    const onRegistrationAction = (event) => {
        event.preventDefault();
        if(password === password2){
        alert("Email:" + email + " pass: " + password + " pass2: " + password2 + " secret: " + secretWord + " GDPR: " + gdpr);}
        else{alert("passwords " + password + " and " + password2 + " are not equals");
        clearAll();
    }
    }
    const clearAll =()=>{
        setEmail('');
        setPassword('');
        setPassword2('');
        setSecretWord('');
        setGdpr(false);
    }

    const switchGdpr = () => {
        setGdpr(!gdpr);
    }

    return (
        <div>
            <FormComp headline ='Register' onSubmitAction = {onRegistrationAction} isDisabled={isDisabled}
                inputFields = { 
                <div>
                    <InputField headline='Email: ' type = 'text' name='username' onChangeAction={ value => setEmail(value)}/>
                    <InputField headline='Password: ' type = 'password' name='password' onChangeAction={ value => setPassword(value)}/>
                    <InputField headline='Re-enter Password: ' type = 'password' name='password2' onChangeAction={ value => setPassword2(value)}/>
                    <InputField headline='Secret word: ' type = 'text' name='secretWord' onChangeAction={ value => setSecretWord(value)}/>
                    <InputField headline='Check this if you agree with GDPR: ' type = 'checkbox' name='gdpr' onChangeAction={ () => switchGdpr()}/>
                </div>  
                } 
            />
            <br />
            <ButtonComp btnName = 'Login Here' onClickFunction ={() => goToLogin()} />
        </div>
    );
};

export default RegistrationPage;