import React, { useState, useEffect } from "react";
import InputField from "../../component/InputField";
import FormComp from "../../component/FormComp";
import ButtonComp from "../../component/ButtonComp";


const MyProfile = () => {
  const [imageName, setImageName] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [userData, setUserData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [socnumber, setSecurityNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setAreaCode] = useState("");
  const [phone, setTelephonenumber] = useState("");
  const [email, setEmail] = useState("");
  // const [userData, setUserData] = useState(["Dan", "Andersson", "880512", "Stigen 2", "Stockholm", "12345", "08080808", "danne.a@gmail.com"]);
  // const [userData, setUserData] = useState([]);
  // const [edits, setEdits] = useState([]);

  useEffect(() => {
    setImageName("katten");
  }, []);

  const handleUpload = () => {
    return <input type="file" />;
  };

  const deleteMyData = () => {
    alert("Data deleted");
  };

  useEffect(()=>{
    fetch("http://localhost:3000/users/2",{
        method: "GET"
    })
    .then((response)=>response.json())
    .then((data)=>{
   
     setUserData(data)
   
 })
},[]);

  useEffect(() => {
    // onProfileSave();

  });
  let onProfileSave = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/update-users/2', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
       body: JSON.stringify({firstName, lastName, socnumber, adress, zipcode, city, email, phone}),
    })
    .then((response) => response.json())
        .then((data) => {

        })
        .catch ((error)=>{
          console.log(error,'COuldnt upload')
        })
  };

  return (
    <div className="container">
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
        headline="Ladda upp bild"
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
                headline="Förnamn "
                type="text"
                name="firstname"
                onChangeAction={(value) => value !== "" && setFirstName(value)}
              />
              <InputField
                headline="Efternamn "
                type="text"
                name="lastname"
                onChangeAction={(value) => value !== "" && setLastName(value)}
              />
            </div>

            <div className="inLine">
              <InputField
                headline="Personnummer "
                type="text"
                name="securitynumber"
                onChangeAction={(value) => value !== "" && setSecurityNumber(value)}
              />
              <InputField
                headline="Adress "
                type="text"
                name="adress"
                onChangeAction={(value) => value !== "" && setAdress(value)}
              />
            </div>

            <div className="inLine">
              <InputField
                headline="Stad "
                type="text"
                name="stad"
                onChangeAction={(value) => value !== "" && setCity(value)}
              />
              <InputField
                headline="Postnummer "
                type="text"
                name="areaCode"
                onChangeAction={(value) => value !== "" && setAreaCode(value)}
              />
            </div>
            <InputField
              headline="Telefonnummer "
              type="text"
              name="telephonenumber"
              onChangeAction={(value) => value !== "" && setTelephonenumber(value)}
            />
            <InputField
              headline="Epost "
              type="text"
              name="email"
              onChangeAction={(value) => value !== "" && setEmail(value)}
            />
            <hr />
          </div>
        }
      />
      <br />
      <ButtonComp btnName = "Radera min profil" onClickFunction = {deleteMyData}/>
    </div>
  );
};

export default MyProfile;
