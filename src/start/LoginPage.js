import React, { useState } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';

const LoginPage = ({goToRegistation, goToLostPassword}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginAction = (event) => {
        event.preventDefault();
        alert("Email:" + email + " pass: " + password);
    }

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
          <ButtonComp btnName = 'Register Here' onClickFunction ={() => goToRegistation()}/>
          <ButtonComp btnName = 'Lost Password' onClickFunction ={() => goToLostPassword()}/>
      </div>
    );
  };

  export default LoginPage;