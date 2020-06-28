import React, { useState } from "react";
import InputField from "../../component/InputField";
import FormComp from "../../component/FormComp";
import '../../styling/ChangePassword.css'

const ChangePasswordPage = () => {
  const [old_password, setCurrentPass] = useState("");
  const [new_password, setNewPass] = useState("");
  const [reEnterPass, setReEnterPass] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const id_token = localStorage.getItem("id_token");

  const onPasswordChangedSubmit = (event) => {
    event.preventDefault();

    if (!old_password || !new_password || !reEnterPass) {
      setInfoMessage("Du måste skirva i alla fält");
      return;
    }

    if (new_password !== reEnterPass) {
      setInfoMessage("Lösenorden matchar inte");
      return;
    }

    if (!id_token) {
      setInfoMessage("Du har inget login-token. Var god logga in igen.");
      return;
    }

    fetch("http://localhost:3001/updatePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        old_password,
        new_password,
        id_token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sucess) {
          setInfoMessage("Du bytte lösenord");
        } else {
          setInfoMessage(data.message);
        }
      });
  };

  return (
    <div className="container-change-password">
      <FormComp
        onSubmitAction={onPasswordChangedSubmit}
        buttonId="profileSaveButton"
        value="Spara"
        inputFields={
          <div className="input-form">
            <InputField
              headline="Nuvarande lösenord "
              type="password"
              name="currentPass"
              onChangeAction={(value) => setCurrentPass(value)}
            />
            <InputField
              headline="Nytt lösenord "
              type="password"
              name="newPass"
              onChangeAction={(value) => setNewPass(value)}
            />
            <InputField
              headline="Bekräfta nytt lösenord "
              type="password"
              name="reenterpass"
              onChangeAction={(value) => setReEnterPass(value)}
            />
            {infoMessage && <p>{infoMessage}</p>}
            <hr />
          </div>
        }
      />
    </div>
  );
};

export default ChangePasswordPage;
