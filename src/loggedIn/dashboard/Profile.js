import React from 'react';
import PersonalData from './PersonalData';
import Contact from './Contact';
import PreferredInd from './PreferredInd';
import { NavLink } from 'react-router-dom';


    const Profile = ({userData, prefData}) => {
        
        if(userData) {
            return(
                <div id="profileDiv" className="container">
                        <h4 className="dashboardSubtitle">Min profil</h4>
                        <NavLink className="dashboardBtn" value={"Redigera"} to={"/settings"}>Redigiera</NavLink>  
                        <img  alt="profile pic"/>
                            
                            <PersonalData firstname={userData.firstname}
                                lastname={userData.lastname}/> 
                               
                            <div id="industryDiv">
                                <p className="profileSubtitle">Föredragna industrier</p>
                                {
                                    prefData.map((element, index) => <PreferredInd id={index} industryData={element} key={index}/>)
                                }
                            </div>
                            <Contact data={userData}/>
                    </div>
            );
        } else {
            return(<p>Hittade ingen användardata</p>);
        }
       
   
    }

   

    export default Profile;
