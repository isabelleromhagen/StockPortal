import React, { useState, useEffect } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';

const RegistrationPage = ({goToLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [secretword, setSecretWord] = useState('');
    const [gdpr, setGdpr] = useState(false);
    const [infoMessage, setInfoMessage] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const onRegistrationAction = (event) => {
        event.preventDefault();
        if(!gdpr) {
            setInfoMessage("You need to accept gdpr");
            return;
        }

        if(password !== password2) {
            setInfoMessage("Passwords do not match");
            return;
        }

        if(!email || !password || !password2 || !secretword) {
            setInfoMessage("You need to write in all fields");
            return;
        }

        fetch("http://localhost:3001/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    secretword,
                }),
            })
            .then((response) => response.json())
            .then((data) => { 
            if(data.sucess) {
                setInfoMessage("You created an account");
            }
            else {
                setInfoMessage(data.message);
            }
        });

    }

    const switchGdpr = () => {
        setGdpr(!gdpr);
    }

    return (
        <div className = 'StartDiv'>
            <FormComp headlineClass='startHeader' className ="FormDiv" headline ='Register' onSubmitAction = {onRegistrationAction} isDisabled={isDisabled} value ='Registera'
                inputFields = { 
                <div>
                    <InputField InputClass='startFields' headline='Email: ' type = 'text' name='username' onChangeAction={ value => setEmail(value)}/>
                    <InputField InputClass='startFields' headline='Password: ' type = 'password' name='password' onChangeAction={ value => setPassword(value)}/>
                    <InputField InputClass='startFields' headline='Re-enter Password: ' type = 'password' name='password2' onChangeAction={ value => setPassword2(value)}/>
                    <InputField InputClass='startFields' headline='Secret word: ' type = 'password' name='secretWord' onChangeAction={ value => setSecretWord(value)}/>
                    <a id='gdprlink' href="https://gdpr-info.eu/"> GDPR-INFO</a>
                    <InputField InputClass='startFields' headline='Check this if you agree with GDPR: ' type = 'checkbox' name='gdpr' onChangeAction={ () => switchGdpr()}/>
                    </div>  
                } 
            />
            {infoMessage && <p>{infoMessage}</p>}
            <br />
            <ButtonComp btnClassName ='startUpButtons' btnName = 'Login Here' onClickFunction ={() => goToLogin()} />
        </div>
    );
};

export default RegistrationPage;