import React, { useState } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';


const LostPasswordPage = ({goToLogin}) => {
    const [email, setEmail] = useState('');
    const [secretword, setSecretWord] = useState('');
    const [infoMessage, setInfoMessage] = useState('');

    const getPassword = (event) => {
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
      <div className = 'StartDiv'>
          <FormComp className="FormDiv" headline ='Lost Password' onSubmitAction = {getPassword} value= 'Hämta lösenord'
              inputFields = { 
              <div>
                  <InputField InputClass='startFields' headline='Email: ' type = 'text' name='email' onChangeAction={ value => setEmail(value)}/>
                  <InputField InputClass='startFields' headline='Secret word: ' type = 'text' name='secret' onChangeAction={ value => setSecretWord(value)}/>
              </div>  
              } 
          />
          {infoMessage && <p>{infoMessage}</p>}
          <br />
          <ButtonComp btnClassName ='startUpButtons' btnName = 'Login Here' onClickFunction ={() => goToLogin()}/>
      </div>
    );
  };

  export default LostPasswordPage;