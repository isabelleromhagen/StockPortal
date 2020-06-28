import React from 'react';
import PersonalData from './PersonalData';
import Contact from './Contact';
import PreferredInd from './PreferredInd';
import { NavLink } from 'react-router-dom';


    const Profile = ({userData, prefData}) => {
        const contactLabels = ["Telefon", "Email", "Adress", "Postnummer", "Postort"];
        const contactData = [userData.phone, userData.email, userData.adress, userData.zipcode, userData.city];
        
        if(userData) {
            return(
                <div id="profileDiv" className="dashboardContentContainer">
                        <h4 className="dashboardSubtitle">Min profil</h4>
                        <NavLink className="dashboardBtn" value={"Redigera"} to={"/settings"}>Redigiera</NavLink>  
                        {userData.imgname ? (
                            <img id="Hang-image" className="profilepic" alt="profile img" src={require(`../../uploads/profilepics/${userData.imgname}`)} ></img>
                          ) : (
                              <p id="nopic">Du har inte laddat upp en bild än</p>)}
                            
                            <PersonalData firstname={userData.firstname}
                                lastname={userData.lastname}/> 
                               
                            <div id="industryDiv">
                                <p className="profileSubtitle">Föredragna industrier</p>
                                {
                                    prefData.map((element, index) => <PreferredInd id={index} industryData={element} key={index}/>)
                                }
                            </div>
                               <p className="profileSubtitle">Kontaktuppgifter</p> 
                            <table id="contact">
                                <tbody>
                                      {
                                          contactLabels.map((contactLabel, index) => <Contact label={contactLabel} labelData={contactData[index]} key={index}/>)
                                      }  
                                </tbody>     
                            </table>
                            
                    </div>
            );
        } else {
            return(<p>Hittade ingen användardata</p>);
        }
       
   
    }

   

    export default Profile;
