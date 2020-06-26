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
        <div>
            <FormComp headline ='Register' onSubmitAction = {onRegistrationAction} isDisabled={isDisabled}
                inputFields = { 
                <div>
                    <InputField headline='Email: ' type = 'text' name='username' onChangeAction={ value => setEmail(value)}/>
                    <InputField headline='Password: ' type = 'password' name='password' onChangeAction={ value => setPassword(value)}/>
                    <InputField headline='Re-enter Password: ' type = 'password' name='password2' onChangeAction={ value => setPassword2(value)}/>
                    <InputField headline='Secret word: ' type = 'password' name='secretWord' onChangeAction={ value => setSecretWord(value)}/>
                    <InputField headline='Check this if you agree with GDPR: ' type = 'checkbox' name='gdpr' onChangeAction={ () => switchGdpr()}/>
                </div>  
                } 
            />
            {infoMessage && <p>{infoMessage}</p>}
            <br />
            <ButtonComp btnName = 'Login Here' onClickFunction ={() => goToLogin()} />
        </div>
    );
};

export default RegistrationPage;