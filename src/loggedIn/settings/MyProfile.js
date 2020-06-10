import React, { useState, useEffect } from "react";
import InputField from "../../component/InputField";
import FormComp from "../../component/FormComp";

const MyProfile = () => {
  const [imageName, setImageName] = useState("");
  const [imageUpload, setImageUpload] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [securityNumber, setSecurityNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [telephonenumber, setTelephonenumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setImageName("katten");
  }, []);

  const handelUpload = () => {
    return <input type="file" />;
  };

  const onProfileSave = (event) => {
    event.preventDefault();
    alert(lastName);
  };

  return (
    <div>
      {imageName ? (
        <img
          id="Hang-image"
          alt="hang"
          src={require("../../images/" + imageName + ".jpg")}
        />
      ) : (
        <p></p>
      )}
      <InputField
        headline="Uppload profile picture"
        type="file"
        name="profilepic"
        onChangeAction={(value) => setImageUpload(value)}
      />
      <FormComp
        onSubmitAction={onProfileSave}
        buttonId="profileSaveButton"
        value="Spara"
        inputFields={
          <div>
            <div className="inLine">
              <InputField
                headline="Förnamn: "
                type="text"
                name="firstname"
                onChangeAction={(value) => setFirstName(value)}
              />
              <InputField
                headline="Efternamn: "
                type="text"
                name="lastname"
                onChangeAction={(value) => setLastName(value)}
              />
            </div>

            <div className="inLine">
              <InputField
                headline="Personnummer: "
                type="text"
                name="securitynumber"
                onChangeAction={(value) => setSecurityNumber(value)}
              />
              <InputField
                headline="Adress: "
                type="text"
                name="adress"
                onChangeAction={(value) => setAdress(value)}
              />
            </div>

            <div className="inLine">
              <InputField
                headline="City: "
                type="text"
                name="stad"
                onChangeAction={(value) => setCity(value)}
              />
              <InputField
                headline="Postnummer: "
                type="text"
                name="areaCode"
                onChangeAction={(value) => setAreaCode(value)}
              />
            </div>
            <InputField
              headline="Telefonnumber: "
              type="text"
              name="telephonenumber"
              onChangeAction={(value) => setTelephonenumber(value)}
            />
            <InputField
              headline="Mail: "
              type="text"
              name="email"
              onChangeAction={(value) => setEmail(value)}
            />
            <hr />
          </div>
        }
      />
    </div>
  );
};

export default MyProfile;
