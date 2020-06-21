import React, {useState, useEffect} from "react";
import '../../styling/Dashboard.css';
import Shareholding from './Shareholding';
import Banner from './Banner';
// import Data from '../../data/userShareData.json';
import Profile from "./Profile";
// import { response } from "express";
// import { response, json } from "express";


const Dashboard = () => {
    const [isInlogged, setIsinlogged] = useState(true);
    const [userData, setUserData] = useState([]);
    const [shareData, setShareData] = useState([]);
    const [prefData, setPrefData] = useState([]);

//    useEffect(() => {
//         setData(isInlogged ? data : [])
       
//     }, []);
   useEffect(()=>{
       fetch("http://localhost:3000/users",{
           method: "GET"
       })
       .then((response)=>response.json())
       .then((data)=>{
      
        console.log(data);
        setUserData(data)
        // setLastUpdate(data[0].datepurchased)
    })
   },[]);

   useEffect(()=>{
    fetch("http://localhost:3000/portfolio",{
        method: "GET"
    })
    .then((response)=>response.json())
    .then((data)=>{
   
     console.log(data);
     setShareData(data)
     // setLastUpdate(data[0].datepurchased)
    })
    },[]);

    useEffect(()=>{
        fetch("http://localhost:3000/preference",{
            method: "GET"
        })
        .then((response)=>response.json())
        .then((data)=>{
    
        console.log(data);
        setPrefData(data)
        // setLastUpdate(data[0].datepurchased)
    })
    },[]);

    return(
        <div>   
            {shareData.length > 0 ? <Banner text={`Välkommen ${userData[0].firstname}! 
            Ditt innehav uppdaterades 2020-06-11. Ta gärna en titt!`}/> : <Banner text={`Välkommen ${userData.firstname}! 
            Du har inte något innehav ännu. Du får ett mail så fort det är uppdaterat!`}/>}
            <Profile userData={userData} prefData={prefData}/>
            <Shareholding shares={shareData}/>
        </div>
    );
};

export default Dashboard;
