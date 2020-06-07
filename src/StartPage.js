import React, { useState } from 'react';
import FormComp from './component/FormComp';
import InputField from './component/InputField';
import ButtonComp from './component/ButtonComp';


const StartPage = ({loginPageActive = true}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [secretWord, setSecretWord] = useState('');
    const [gdpr, setGdpr] = useState(false);
    const [atLogin, setLogin] = useState(loginPageActive);

    const onLoginAction = (event) => {
        event.preventDefault();
        alert("Email:" + email + " pass: " + password);
    }

    const onRegistrationAction = (event) => {
        event.preventDefault();
        alert("Email:" + email + " pass: " + password + " pass2: " + password2 + " secret: " + secretWord + " GDPR: " + gdpr);
    }

    const switchGdpr = () => {
        setGdpr(!gdpr);
    }

    return (
        <div>
            {
                atLogin ? 
                <LoginPage setEmail = {setEmail} setPassword = {setPassword} onLoginAction = {onLoginAction} setLogin = {setLogin}/> : 
                <RegistrationPage setEmail = {setEmail} setPassword = {setPassword} 
                setPassword2 = {setPassword2} setSecretWord = {setSecretWord} onRegistrationAction = {onRegistrationAction}
                switchGdpr = {switchGdpr} setLogin = {setLogin} /> 
            }
        </div>
     );
  }

  const LoginPage = ({setEmail, setPassword, setLogin , onLoginAction}) => {

      return (
        <div>
            <FormComp headline ='Login' onSubmitAction = {onLoginAction} 
                inputFields = { 
                <div>
                    <InputField headline='Email: ' type = 'text' name='email' onChangeAction={ value => setEmail(value)}/>
                    <InputField headline='Password: ' type = 'text' name='password' onChangeAction={ value => setPassword(value)}/>
                </div>  
                } 
            />
            <br />
            <ButtonComp btnName = 'Register Here' onClickFucntion ={() => setLogin(false)}/>
        </div>
      );
    };

  const RegistrationPage = ({setEmail, setPassword, setPassword2, setSecretWord, switchGdpr, setLogin, onRegistrationAction}) => {

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
                <ButtonComp btnName = 'Login Here' onClickFucntion ={() => setLogin(true)} />
            </div>
        );
    };

  export default StartPage;