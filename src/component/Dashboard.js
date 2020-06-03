import React, { Component } from "react";
import ButtonComponent from "./ButtonComp";
import image from "../images/cymbal.jpg"


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return(
            <div>
                <Banner/>
                <DashboardContainer/>
            </div>
        );
    }    
}
  /*use template literal here! */
class Banner extends Component {
    render() {
        const welcomeMsg = "Välkommen! Du har inte något innehav ännu. Du får ett mail så fort det är uppdaterat!";
        return(
            <p id="welcomeBanner">{welcomeMsg}</p>
        );
    }
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
    render() {
        return(
            <div id="profileDiv" className="container">
            <h4 className="dashboardSubtitle">Min profil</h4>
            <ButtonComponent btnClassName="dashboardBtn" btnName={"Redigera"}/>
            <div className="content">
                <img src={image} alt="profile pic"/>
                <PersonalData/>
                <Industries/>
                <Contact/>
            </div>
        </div>
        );
    }
}

class PersonalData extends Component {
    render() {
        return(
            <div id="personalData">
            <h4>Magnus Persson</h4>
            <p>Person-/organisationsnummer</p>
            <p>940319-XXXX</p>
        </div>  
        );
    }
}

class Industries extends Component {
    render() {
        return(
            <div id="industryDiv">
            <p className="profileSubtitle">Föreslagna industrier</p> {/*make separate component and loop! */}
            <p className="industry" id="industry1">Industri 1</p>
            <p className="industry" id="industry2">Industri 2</p>
            <p className="industry" id="industry3">Industri 3</p>
            <p className="industry" id="industry4">Industri 4</p>
        </div>
        );
    }
}



class Contact extends Component {
    render() {
        return(
            <div id="contact">
                   <p className="profileSubtitle">Kontaktuppgifter</p> 
                   <table>
                        <tr>
                            <th>Telefon</th>
                            <td>079 111 2222</td>
                        </tr>
                        <tr>
                            <th>Mail</th>
                            <td>magnus.person@hotmail.com</td>
                        </tr>
                        <tr>
                            <th>Adress</th>
                            <td>Lantmilsgatan 7</td>
                        </tr>
                        <tr>
                            <th>Postnummer</th>
                            <td>41501</td>
                        </tr>
                        <tr>
                            <th>Postort</th>
                            <td>Göteborg</td>
                        </tr>
                   </table>
                </div>
        );

    }
}

class Shareholding extends Component {
    render() {
        return(
            <div id="propertyDiv" className="container">
                <h4 className="dashboardSubtitle">Mitt innehav</h4>
                <ButtonComponent btnClassName="dashboardBtn" btnName={"Min Portfölj"}/>
                <div className="content">
                    <h1>0 SEK</h1>
                    <div id="barDiagram"></div>
                    <ShareInfo/>
                </div>
            </div>
        );
    }
}

class ShareInfo extends Component {
    render() {
        return(
            <div className="propertyStockInfo">
            <div id="sectorColor"></div>
            <p id="sectorName">Byggsektorn</p>
            <p id="companyName">Företag 1, företag 2+4</p>
            <p id="propertyValue">32 244 SEK</p>
            </div>
        );
    }
}


export default Dashboard;