import React, { Component } from "react";
import ButtonComponent from "./ButtonComp";
import image from "../images/cymbal.jpg"
import '../styling/Dashboard.css'


class User {
    constructor(name, pNum, phone, email, address, zip, city){
        this.name = name;
        this.welcomeMsg = this.getWelcomeMsg;
        this.pNum = pNum;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.zip = zip;
        this.city = city;

    }
    getWelcomeMsg() {
        return `Välkommen ${this.name}! 
        Du har inte något innehav ännu. Du får ett mail så fort det är uppdaterat!`;
    }

  
}

const testUser = new User(
    'Isabelle Romhagen', '940319-1234', '079 111 2222', 'isabelle.romhagen@gmail.com', 'Lantmilsgatan 7', '41501', 'Göteborg');
// console.log(testUser);

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.user = testUser
        this.welcomeMsg = this.user.getWelcomeMsg();
        

        this.state = {
            
            
        }
    }
    
    render() {
    
        return(
            <div>
                <Banner  welcomeMsg={this.welcomeMsg}/>
                <DashboardContainer/>
            </div>
        );
    }    
}


  

const Banner = ({welcomeMsg}) => {
    return(
        <p className="welcomeBanner">{welcomeMsg}</p>
    );
}

class DashboardContainer extends Component {
    render() {
        return(  
            <div id="dashboardContainer">
                <Profile/>
                <Shareholding/>
            </div>
        );
    }

}

class Profile extends Component {
    constructor(props) {
        super(props);

        this.user = testUser;

        this.state = {
            industries: ["Industry 1", "Industry 2", "Industry 3", "Industry 4"]
        };
    }
    render() {
      
        return(
            <div id="profileDiv" className="container">
                <h4 className="dashboardSubtitle">Min profil</h4>
                <ButtonComponent btnClassName="dashboardBtn" btnName={"Redigera"}/>
                <div className="content">
                    <img src={image} alt="profile pic"/>
                    <PersonalData name={this.user.name} pNum={this.user.pNum}/>
                    <div id="industryDiv">
                        <p className="profileSubtitle">Föreslagna industrier</p>
                        <SuggestedInd className="industry" industries={this.state.industries}/>
                    </div>
                    <Contact phone={this.user.phone} email={this.user.email} address={this.user.address} zip={this.user.zip} city={this.user.city}/>
                </div>
            </div>
        );
    }
}


const PersonalData = ({name, pNum}) => {
    return(
        <div id="personalData">
            <h4>{name}</h4>
            <p>Person-/organisationsnummer</p>
            <p>{pNum}</p>
        </div> 
    );
}

const SuggestedInd = ({industries}) => {
    return(
        <div>
            {
                industries.map((industry, index) => <p id={index} industryname={industry} key={index}>{industry}</p>)
            }
        </div>
    );
}


const Contact = ({phone, email, address, zip, city}) => {
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


class Shareholding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            shares: [{
                color: 'blue',
                sectorname: "Byggsektorn",
                companynames: ['Företag 1', 'företag 2'],
                value: 32244 
            },
            {
                color: 'green',
                sectorname: "Material och råvaror",
                companynames: ['Företag a', 'företag b'],
                value: 10000
            }
        ],
            
        }

    }

    getTotalValue = () => {
       if(this.state.shares) {
     
        return this.state.shares.map((item) => {
            return item.value;
        }).reduce((total, value) => {
            return total + value;
        });
       } else {
           return 0;
       }
        
    }
  
    render() {
        
        return(
            <div id="propertyDiv" className="container">
                <h4 className="dashboardSubtitle">Mitt innehav</h4>
                <ButtonComponent btnClassName="dashboardBtn" btnName={"Min Portfölj"}/>
                <div className="content">
                    <h1>{this.getTotalValue()} SEK</h1>
                     {/*TODO: find out how to tell CSS what colors should be shown and how much of each*/}
                    <ShareInfo shares={this.state.shares}/>
                </div>
            </div>
        );
    }
}

 


const ShareInfo = ({shares}) => {
    if(shares) {
        return(
            <div>
            <div id="barDiagram"></div>
                {
                    shares.map((share, index) => 
                    <div key={index}>
                        <div color={shares[index].color}></div>
                        <p>{share.sectorname}</p>
                        <p>{share.companynames}</p>
                        <p>{share.value}</p>
                    </div>)
                }
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


export default Dashboard;