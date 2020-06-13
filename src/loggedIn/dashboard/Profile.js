import React from 'react';
import ButtonComponent from '../../component/ButtonComp';
import PersonalData from './PersonalData';
import Contact from './Contact';
import PreferredInd from './PreferredInd';


    const Profile = ({userData}) => {

        if(userData.length > 0) {
            return(
                <div id="profileDiv" className="container">
                        <h4 className="dashboardSubtitle">Min profil</h4>
                        <ButtonComponent btnClassName="dashboardBtn" btnName={"Redigera"}/>
                        <div className="content">
                            <img src={'../../images/cymbal.jpg'} alt="profile pic"/>
                            
                            {userData.length > 0 ? <PersonalData firstname={userData[0].firstname}
                                lastname={userData[0].lastname} pNum={userData[0].socNumber}/> :
                                <p>Ingen användardata</p>}
                            
                            
                            <div id="industryDiv">
                                <p className="profileSubtitle">Föredragna industrier</p>
                                {
                                    userData.map((element, index) => <PreferredInd id={index} industryData={element} key={index}/>)
                                }
                            </div>
                            <Contact data={userData}/>
                        </div>
                    </div>
            );
        } else {
            return(<p>Hittade ingen användardata</p>);
        }
       
   
    }

    export default Profile;
