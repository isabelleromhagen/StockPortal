import React, { useState } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';

const RegistrationPage = ({goToLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [secretWord, setSecretWord] = useState('');
    const [gdpr, setGdpr] = useState(false);

    const onRegistrationAction = (event) => {
        event.preventDefault();
        alert("Email:" + email + " pass: " + password + " pass2: " + password2 + " secret: " + secretWord + " GDPR: " + gdpr);
    }

    const switchGdpr = () => {
        setGdpr(!gdpr);
    }

    return (
        <div>
            <FormComp headline ='Register' onSubmitAction = {onRegistrationAction} 
                inputFields = { 
                <div>
                    <InputField headline='Email: ' type = 'text' name='username' onChangeAction={ value => setEmail(value)}/>
                    <InputField headline='Password: ' type = 'text' name='password' onChangeAction={ value => setPassword(value)}/>
                    <InputField headline='Re-enter Password: ' type = 'text' name='password2' onChangeAction={ value => setPassword2(value)}/>
                    <InputField headline='Secret word: ' type = 'text' name='secretWord' onChangeAction={ value => setSecretWord(value)}/>
                    <InputField headline='Check this if you agree with GDPR: ' type = 'checkbox' name='gdpr' onChangeAction={ () => switchGdpr()}/>
                </div>  
                } 
            />
            <br />
            <ButtonComp btnName = 'Login Here' onClickFucntion ={() => goToLogin()} />
        </div>
    );
};

export default RegistrationPage;