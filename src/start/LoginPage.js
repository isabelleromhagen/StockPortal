import React, { useState } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';
import Auth from '../routes/Authenticated';

const LoginPage = ({goToRegistation, goToLostPassword, props}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [infoMessage, setInfoMessage] = useState('');

    const onLoginAction = (event) => {
        event.preventDefault();
       Auth.login( email, password, (res, message) =>{
           if(res) {
            props.history.push('/home');
            return;
           }
           setInfoMessage(message);
       });
    };
    

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
            {infoMessage && <p>{infoMessage}</p>}
          <br />
          <ButtonComp btnName = 'Register Here' onClickFunction ={() => goToRegistation()}/>
          <ButtonComp btnName = 'Lost Password' onClickFunction ={() => goToLostPassword()}/>
      </div>
    );
  };

  export default LoginPage;