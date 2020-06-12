import React, {useState} from "react";
import ButtonComponent from "../../component/ButtonComp";
import image from "../../images/cymbal.jpg"
import '../../styling/Dashboard.css'


const Dashboard = () => {
    const [firstName, setFirstName] = useState('anonym');
    const [lastName, setLastName] = useState('anonym');
    const [welcomeMsg, setWelcomeMessage] = useState(`Välkommen ${firstName}! 
        Du har inte något innehav ännu. Du får ett mail så fort det är uppdaterat!`);
    const [pNum, setPNum] = useState('-');
    const [phone, setPhone] = useState('-');
    const [email, setEmail] = useState('-');
    const [address, setAddress] = useState('-');
    const [zip, setZip] = useState('-');
    const [city, setCity] = useState('-');
    const [hasStocks, setHasStocks] = useState(false);
    const [latestUpdate, setLatestUpdate] = useState('-');
   
    const Banner = ({welcomeMsg}) => {
        return<p className="welcomeBanner">{welcomeMsg}</p>
    }

    const Profile = () => {
        const [industries, setIndustries] = useState([]);
        const SuggestedInd = () => {
            if(industries.length > 0) {
                    return(
                        <div>
                            {industries.map((industry, index) => <p id={index} industryname={industry} key={index}>{industry}</p>)}
                        </div>
                    );
            } else {
                return <p>Inga industrier valda än</p>
            }
        };
        return(
            <div id="profileDiv" className="container">
                    <h4 className="dashboardSubtitle">Min profil</h4>
                    <ButtonComponent btnClassName="dashboardBtn" btnName={"Redigera"}/>
                    <div className="content">
                        <img src={image} alt="profile pic"/>
                        <PersonalData name={firstName} pNum={pNum}/>
                        <div id="industryDiv">
                            <p className="profileSubtitle">Föreslagna industrier</p>
                            <SuggestedInd className="industry" industries={industries}/>
                        </div>
                        <Contact phone={phone} email={email} address={address} zip={zip} city={city}/>
                    </div>
                </div>
        );
    }

    const PersonalData = () => {
        return(
            <div id="personalData">
                <h4>{firstName} {lastName}</h4>
                <p>Person-/organisationsnummer</p>
                <p>{pNum}</p>
            </div> 
        );
    }

    const Contact = () => {
        return(
            <div id="contact">
                <p className="profileSubtitle">Kontaktuppgifter</p> 
                <table>
                    <tbody>
                                <tr>
                                    <th>Telefon</th>
                                    <td>{phone}</td>
                                </tr>
                                <tr>
                                    <th>Mail</th>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <th>Adress</th>
                                    <td>{address}</td>
                                </tr>
                                <tr>
                                    <th>Postnummer</th>
                                    <td>{zip}</td>
                                </tr>
                                <tr>
                                    <th>Postort</th>
                                    <td>{city}</td>
                                </tr>
                    </tbody>     
                </table>
            </div>
        );
    }
    
    const Shareholding = () => {
        const [shares, setShares] = useState([
            ]);

        let getTotalValue = () => {
                if(shares.length > 0) {
                    return shares.map((item) => {
                        return item.value;
                    }).reduce((total, value) => {
                        return total + value;
                    });
                } else {
                    return 0;
                }              
            }
        return(
            <div id="propertyDiv" className="container">
                <h4 className="dashboardSubtitle">Mitt innehav</h4>
                <ButtonComponent btnClassName="dashboardBtn" btnName={"Min Portfölj"}/>
                <div className="content">
                    <h1>{getTotalValue()} SEK</h1>
                    <ShareInfo shares={shares}/>
                </div>
            </div>
        );
    }

    const ShareInfo = ({shares}) => {
        if(shares.length > 0) {
            return(
                <div>
                <div id="barDiagram"></div>
                    {shares.map((share, index) => 
                        <div key={index}>
                            <div color={shares[index].color}></div>
                            <p>{share.sectorname}</p>
                            <p>{share.companynames}</p>
                            <p>{share.value}</p>
                        </div>)}
                </div>
            );
        }
        else {
            return(
                <div>
                    <h2>Inget innehav tillagt ännu</h2>
                </div>
            );
        }
    }
    return(
        <div>
            <Banner welcomeMsg={welcomeMsg}/>
            <Profile/>
            <Shareholding/>
        </div>
    );
};

export default Dashboard;

//***********************TEST DATA **************************//


// const testUser = new User(
//     'Isabelle Romhagen', '940319-1234', '079 111 2222', 'isabelle.romhagen@gmail.com',
//      'Lantmilsgatan 7', '41501', 'Göteborg', true, '2020-06-09');
// console.log(testUser);


// {
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
// }