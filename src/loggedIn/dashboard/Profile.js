import React from 'react';
import ButtonComponent from '../../component/ButtonComp';
import PersonalData from './PersonalData';
import Contact from './Contact';
import PreferredInd from './PreferredInd';


    const Profile = ({userData}) => {

        if(userData) {
            return(
                <div id="profileDiv" className="container">
                        <h4 className="dashboardSubtitle">Min profil</h4>
                        <ButtonComponent btnClassName="dashboardBtn" btnName={"Redigera"}/>
                        <div className="content">
                            <img src={'../../images/cymbal.jpg'} alt="profile pic"/>
                            <PersonalData firstname={userData.firstname}/>
                            <div id="industryDiv">
                                <p className="profileSubtitle">Föreslagna industrier</p>
                                {
                                    userData.map((element, index) => <PreferredInd id={index} industryData={element} key={index}/>)
                                }
                            </div>
                            <Contact data={userData}/>
                        </div>
                    </div>
            );
        } else {
            return(<p>bläää</p>);
        }
       
   
    }

    export default Profile;

    //firstName={'userData[0].firstname'} lastName={userData[0].lastname} pNum={userData[0].socNumber}
    //phone={userData[0].phone} email={userData[0].email} address={userData[0].address} zip={userData[0].zip} city={userData[0].city}