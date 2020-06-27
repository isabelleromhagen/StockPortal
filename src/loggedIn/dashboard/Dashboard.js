import React, {useState, useEffect} from "react";
import '../../styling/Dashboard.css';
import Shareholding from './Shareholding';
import Banner from './Banner';
import Profile from "./Profile";


const Dashboard = () => {
  
    const [userData, setUserData] = useState({});
    const [shareData, setShareData] = useState([]);
    const [prefData, setPrefData] = useState([]);
    const [lastUpdate, setLastUpdate] = useState();
    const id_token = localStorage.getItem('id_token');


      useEffect(() => {
          const fetchUserData = async () => {
              
        await fetch("http://localhost:3001/getProfileInfo", {
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
                    console.log(data);
                    setUserData(data);
                
                
                
               console.log(userData);
            })
          }

          fetchUserData();
          
    }, []);

   useEffect(()=>{
    fetch("http://localhost:3001/portfolio",{
        method: "POST",
          headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_token
            }),
    })
    .then((response) => response.json())
    .then((data)=>{
   
        if(data[0]) {
            setShareData(data);
            console.log(data);
            let date = new Date(data[0].datepurchased);
            setLastUpdate(date.toLocaleDateString());
        }
     
    })
    },[]);

    useEffect(()=>{
        fetch("http://localhost:3001/getPreferencesInfo",{
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_token
            }),
        })
        .then((response)=>response.json())
        .then((data)=>{
    
        if(data[0]) {
            setPrefData(data);
            console.log(data);
        }
        
    })
    },[]);

    return(
        <div>   git 
            {userData && shareData && shareData.length > 0 ? <Banner text={`Välkommen ${userData.firstname}! 
            Ditt innehav uppdaterades ${lastUpdate}. Ta gärna en titt!`}/> : <Banner text={`Välkommen ${userData.firstname}! 
            Du har inte något innehav ännu. Du får ett mail så fort det är uppdaterat!`}/>}
            <Profile userData={userData} prefData={prefData}/>
            <Shareholding shares={shareData}/>
        </div>
    );
};

export default Dashboard;
