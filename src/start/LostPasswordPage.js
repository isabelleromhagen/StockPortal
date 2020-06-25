import React, { useState } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';


const LostPasswordPage = ({goToLogin}) => {
    const [email, setEmail] = useState('');
    const [secretword, setSecretWord] = useState('');
    const [infoMessage, setInfoMessage] = useState('');

    const onLoginAction = (event) => {
        event.preventDefault();

        if(!email || !secretword) {
            setInfoMessage("You need to write in all fields");
            return;
        }

        fetch("http://localhost:3001/lostPassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    secretword,
                }),
            })
            .then((response) => response.json())
            .then((data) => { 
            if(data.sucess) {
                setInfoMessage("Your password is reset to be same as your secret");
            }
            else {
                setInfoMessage(data.message);
            }
        });

    }

    return (
      <div>
          <FormComp headline ='Lost Password' onSubmitAction = {onLoginAction} 
              inputFields = { 
              <div>
                  <InputField headline='Email: ' type = 'text' name='email' onChangeAction={ value => setEmail(value)}/>
                  <InputField headline='Secret word: ' type = 'text' name='secret' onChangeAction={ value => setSecretWord(value)}/>
              </div>  
              } 
          />
          {infoMessage && <p>{infoMessage}</p>}
          <br />
          <ButtonComp btnName = 'Login Here' onClickFunction ={() => goToLogin()}/>
      </div>
    );
  };

  export default LostPasswordPage;