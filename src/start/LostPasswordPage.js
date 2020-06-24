import React, { useState } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';


const LostPasswordPage = ({goToLogin}) => {
    const [email, setEmail] = useState('');
    const [secret, setSecret] = useState('');
    const [myPass, setMyPass] = useState('');

    const onLoginAction = (event) => {
        event.preventDefault();
        alert("Email:" + email + " Secret: " + secret);
        setMyPass('hej1');
    }

    return (
      <div>
          <FormComp headline ='Lost Password' onSubmitAction = {onLoginAction} 
              inputFields = { 
              <div>
                  <InputField headline='Email: ' type = 'text' name='email' onChangeAction={ value => setEmail(value)}/>
                  <InputField headline='Secret word: ' type = 'text' name='secret' onChangeAction={ value => setSecret(value)}/>
              </div>  
              } 
          />
          {myPass && <p>{myPass}</p>}
          <br />
          <ButtonComp btnName = 'Login Here' onClickFunction ={() => goToLogin()}/>
      </div>
    );
  };

  export default LostPasswordPage;