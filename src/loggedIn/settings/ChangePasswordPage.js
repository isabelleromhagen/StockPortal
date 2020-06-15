import React, { useState } from "react";
import InputField from "../../component/InputField";
import FormComp from "../../component/FormComp";

const ChangePasswordPage = () => {
    const [currentPass, setCurrentPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [reEnterPass, setReEnterPass] = useState("");

    const onPasswordChangedSubmit = (event) => {
        event.preventDefault();
        alert(newPass);
    }

  return (
    <div className="container">
      <FormComp
        onSubmitAction={onPasswordChangedSubmit}
        buttonId="profileSaveButton"
        value="Spara"
        inputFields={
          <div>
            <InputField
              headline="Nuvarande lösenord: "
              type="text"
              name="currentPass"
              onChangeAction={(value) => setCurrentPass(value)}
            />
            <InputField
              headline="Nytt lösenord: "
              type="text"
              name="newPass"
              onChangeAction={(value) => setNewPass(value)}
            />
            <InputField
            headline="Bekräfta nytt lösenord: "
            type="text"
            name="reenterpass"
            onChangeAction={(value) => setReEnterPass(value)}
          />
          <hr />
          </div>
        }
      />
    </div>
  );
};

export default ChangePasswordPage;
