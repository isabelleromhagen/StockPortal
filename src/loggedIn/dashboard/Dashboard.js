import React, {useState, useEffect} from "react";
import '../../styling/Dashboard.css';
import Shareholding from './Shareholding';
import Banner from './Banner';
import Profile from "./Profile";
// import { response } from "express";
// import { response, json } from "express";


const Dashboard = () => {
    // const [isInlogged, setIsinlogged] = useState(true);
    const [userData, setUserData] = useState([]);
    const [shareData, setShareData] = useState([]);
    const [prefData, setPrefData] = useState([]);
    const [lastUpdate, setLastUpdate] = useState();

//    useEffect(() => {
//         setData(isInlogged ? data : [])
       
//     }, []);
   useEffect(()=>{
       fetch("http://localhost:3000/users",{
           method: "GET"
       })
       .then((response)=>response.json())
       .then((data)=>{
      
        setUserData(data)
        setLastUpdate(data[0].datepurchased)
    })
   },[]);

   useEffect(()=>{
    fetch("http://localhost:3000/portfolio",{
        method: "GET"
    })
    .then((response)=>response.json())
    .then((data)=>{
   
     setShareData(data);
     let date = new Date(data[0].datepurchased);
     setLastUpdate(date.toLocaleDateString());
     
    })
    },[]);

    useEffect(()=>{
        fetch("http://localhost:3000/preference",{
            method: "GET"
        })
        .then((response)=>response.json())
        .then((data)=>{
    
        setPrefData(data)
        
    })
    },[]);

    return(
        <div>   
            {shareData && shareData.length > 0 ? <Banner text={`Välkommen ${userData[0].firstname}! 
            Ditt innehav uppdaterades ${lastUpdate}. Ta gärna en titt!`}/> : <Banner text={`Välkommen ${userData.firstname}! 
            Du har inte något innehav ännu. Du får ett mail så fort det är uppdaterat!`}/>}
            <Profile userData={userData} prefData={prefData}/>
            <Shareholding shares={shareData}/>
        </div>
    );
};

export default Dashboard;
