import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
// import InputField from "../../component/InputField";
// import FormComp from "../../component/FormComp";
import ButtonComp from "../../component/ButtonComp";
// import edit from "../../images/edit-button.svg";
import FormInput from "../../component/FormInput";
import '../../styling/Settings.css';


const MyProfile = () => {
  const [imageName, setImageName] = useState("");
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState({});
  const [infoMessage, setInfoMessage] = useState("");
  const id_token = localStorage.getItem('id_token');

  const onSubmitImg = async (data) => {

    const imgData = new FormData();
    imgData.append('profilepic', data);
    imgData.append('id_token', id_token);
    await fetch('http://localhost:3001/upload-image', {
      method: "POST",
      body: imgData,
    }).then(res => res.json())

  }

  useEffect(() => {

    if (!id_token) {
      setInfoMessage("There's no valid token. Please log in.");
      return;
    }
    fetch("http://localhost:3001/getProfileInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        id_token
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  const onProfileSave = (enteredData) => {

    if (!enteredData) {
      return;
    }
    if (enteredData.profilepic) {
      onSubmitImg(enteredData.profilepic[0]);
    }
    if (!id_token) {
      setInfoMessage("There's no valid token. Please log in.");
      return;
    }
    if (!enteredData.firstname) {
      enteredData.firstname = userData.firstname;
    }
    if (!enteredData.lastname) {
      enteredData.lastname = userData.lastname;
    }
    if (!enteredData.email) {
      enteredData.email = userData.email;
    }
    if (!enteredData.adress) {
      enteredData.adress = userData.adress;
    }
    if (!enteredData.zipcode) {
      enteredData.zipcode = userData.zipcode;
    }
    if (!enteredData.city) {
      enteredData.city = userData.city;
    }
    if (!enteredData.phone) {
      enteredData.phone = userData.phone;
    }
    if (!enteredData.socnumber) {
      enteredData.socnumber = userData.socnumber;
    }
    fetch("http://localhost:3001/updateUserInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "firstname": enteredData.firstname,
        "lastname": enteredData.lastname,
        "email": enteredData.email,
        "adress": enteredData.adress,
        "zipcode": enteredData.zipcode,
        "city": enteredData.city,
        "phone": enteredData.phone,
        "socnumber": enteredData.socnumber,
        id_token
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sucess) {
          setInfoMessage("Din profil uppdaterades!");
        }
        else {
          setInfoMessage(data.message);
        }
      });


  }

  //TODO get the image from ./image when API is incorp.
  useEffect(() => {
    setImageName("katten");
  }, []);


  const deleteMyData = () => {
    if (!id_token) {
      setInfoMessage("There's no valid token. Please log in.");
      return;
    }
    fetch("http://localhost:3001/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_token
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sucess) {

          setInfoMessage("Din profil har raderats!");
          setUserData({ "email": userData.email });

        }
        else {
          setInfoMessage(data.message);
        }
      });

  };


  return (
    <div className="settings-container">
      {imageName ? (
        <img id="Hang-image" alt="hang" src={require("../../images/" + imageName + ".jpg")} />
      ) : (
          <p></p>)}
      <form onSubmit={handleSubmit(onProfileSave)}>
        <FormInput register={register} type="file" name="profilepic" />
        <div className="name">
          <FormInput register={register} headline="Förnamn " type="text" name="firstname" placeholder={userData.firstname} />
          <FormInput register={register} headline="Efternamn " type="text" name="lastname" placeholder={userData.lastname} />
        </div>
        <div className="snumber">
          <FormInput register={register} headline="Personnummer " type="text" name="socnumber" />
          </div>
          <div className="adress">
          <FormInput register={register} headline="Adress " type="text" name="adress" placeholder={userData.adress} />
          </div>
        <div className="postalcode-city">
          <FormInput register={register} headline="Stad " type="text" name="city" placeholder={userData.city} />
          <FormInput register={register} headline="Postnummer " type="text" name="zipcode" placeholder={userData.zipcode} />
        </div>
        <div className="phone">
        <FormInput register={register} headline="Telefonnummer " type="text" name="phone" placeholder={userData.phone} />
        </div>
        <div className="email">
        <FormInput  register={register} headline="Epost " type="text" name="email" placeholder={userData.email}  />
        </div>
        <button buttonid="profileSaveButton" value="Spara">Spara</button>
      </form>
      {
        infoMessage && <p>{infoMessage}</p>
      }
      <br />
      <ButtonComp btnName="Radera min data" onClickFunction={deleteMyData} />
    </div>
  );
};

export default MyProfile;
