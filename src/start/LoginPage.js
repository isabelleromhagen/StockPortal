import React, { useState, useEffect } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';
import Auth from '../routes/Authenticated';

const LoginPage = ({goToRegistation, goToLostPassword, props}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginCount, setloginCount] =useState(0);
    const [errorMessage, setMessage] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    useEffect (()=>{
        if(loginCount >3){
            setDisabled(true)
        }
    })
/** insert real password into if-statment and remove the alert */
    const onLoginAction = (event) => {
        event.preventDefault();
        if(password ==="1234"){
        alert("Email:" + email + " pass: " + password);
       Auth.login(()=>{
           props.history.push('/home');
       })}
       else{wrongPassword(event)}

    }
    const wrongPassword = (event) =>{
            setloginCount(loginCount +1);
            setMessage(<div id="errorMessagediv"> <p>wrong password</p> {(3-loginCount)}<p>trys left.. </p> </div>)
            
    }

    return (
      <div>
          <FormComp headline ='Login' onSubmitAction = {onLoginAction} isDisabled ={isDisabled}
              inputFields = { 
              <div>
                  <InputField headline='Email: ' type = 'text' name='email' onChangeAction={ value => setEmail(value)}/>
                  <InputField headline='Password: ' type = 'password' name='password' onChangeAction={ value => setPassword(value)}/>
              </div>  
              } 
          />
          {errorMessage}
          <br />
          <ButtonComp btnName = 'Register Here' onClickFunction ={() => goToRegistation()}/>
          <ButtonComp btnName = 'Lost Password' onClickFunction ={() => goToLostPassword()}/>
      </div>
    );
  };

  export default LoginPage;