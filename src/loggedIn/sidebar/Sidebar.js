import React, {useState, useEffect} from 'react';
import '../../styling/SideBar.css' 
import molndal from '../../images/molndal.png';
import Dashboard from '../dashboard/Dashboard'
import MyPortfolio from '../portfolio/MyPortfolio';
import SettingsPage from '../settings/SettingsPage';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LinkComponent from '../../component/LinkComp';


const logOut = () =><div><h1>skräpskräpskräpskräpskräpskräpskräpskräp</h1> </div>;
const fyranollfyra = () => <div> fyra noll fyra </div>;






const nameArr =[['Hem','fa fa-home'], 
['Min Portfölj','fa fa-briefcase'],
['Inställingar','fa fa-cogs'],
['Logga_ut','fa fa-sign-out']];

const views = ["/home","/my_portfolio","/settings","/disconnect"];

const SideBar = () =>{

    
    const [viewState, setViewState] = useState(views[0]);


    useEffect(()=>{
        console.log("new View:  " + viewState);
    })

    const changeViewState =(e) =>{
       
        setViewState(views[0])
    }


    const generateLinks = 
    nameArr.map(([name, iconname],index)=>{
      return  <div 
      className ="sidebar">
      
      <LinkComponent
      linkName ={name}
      linkID ={name}
      linkClass = "sideLink"
      linkIcon = {iconname}
      onClickLink ={views[index]}
     />
      </div>
      
    })

        return(
            <div className="sidediv">
            
            <img src={molndal} id ="sideImageLoggo" alt="campusImage"></img>
            {generateLinks}
            </div>
        )
       

};

const Routes = (
    <BrowserRouter>
    <div>
    <SideBar/>
    <Switch>
    <Route path ="/disconnect" component ={logOut} />
    <Route path ="/home" component ={Dashboard} />
    <Route path ="/my_portfolio" component ={MyPortfolio} />
    <Route path ="/settings" component ={SettingsPage} />
    <Route component={fyranollfyra} />
    </Switch>
    </div>
    </BrowserRouter>
        
    );

export default Routes;