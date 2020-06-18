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
    const [data, setData] = useState([]);

   useEffect(() => {
        setData(isInlogged ? data : [])
       
    }, []);
   useEffect(()=>{
       console.log('in dashboard use effect');
       fetch("http://localhost:3000/users",{
           method: "GET"
       })
       .then((response)=>response.json())
       .then((data)=>{
      
        console.log(data);
        setData(data)
        // setLastUpdate(data[0].datepurchased)
    })
   },[]);

    return(
        <div>
            {data.length > 0 ? <Banner text={`Välkommen ${data[0].firstname}! 
            Ditt innehav uppdaterades 2020-06-11. Ta gärna en titt!`}/> : <Banner text={`Välkommen ${data.firstname}! 
            Du har inte något innehav ännu. Du får ett mail så fort det är uppdaterat!`}/>}
            <Profile userData={data}/>
            <Shareholding shares={data}/>
        </div>
    );
};

export default Dashboard;
