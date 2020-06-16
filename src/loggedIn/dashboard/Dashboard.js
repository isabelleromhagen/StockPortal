import React, {useState, useEffect} from "react";
import '../../styling/Dashboard.css';
import Shareholding from './Shareholding';
import Banner from './Banner';
import Data from '../../data/userShareData.json';
import Profile from "./Profile";


const Dashboard = () => {
    useEffect(() => {
        //get all info from DB
        setData(Data);
    }, []);

    const [data, setData] = useState([]);

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
