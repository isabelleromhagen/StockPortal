import React, {useState, useEffect} from "react";
import '../../styling/Dashboard.css'
import Profile from './Profile';
import Shareholding from './Shareholding';
import Banner from './Banner';
import Data from '../../data/userShareData.json';


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

//*********************** TEST DATA **************************//

//    <Profile data={data}/>
// const testUser = new User(
//     'Isabelle Romhagen', '940319-1234', '079 111 2222', 'isabelle.romhagen@gmail.com',
//      'Lantmilsgatan 7', '41501', 'Göteborg', true, '2020-06-09');
// console.log(testUser);


// [{
//     color: 'blue',
//     sectorname: "Byggsektorn",
//     companynames: ['Företag 1', 'företag 2'],
//     value: 32244 
// },
// {
//     color: 'green',
//     sectorname: "Material och råvaror",
//     companynames: ['Företag a', 'företag b'],
//     value: 10000
// },
// {
//     color: 'red',
//     sectorname: "Läkemedel",
//     companynames: ['Företag a', 'företag b'],
//     value: 12345
// }]