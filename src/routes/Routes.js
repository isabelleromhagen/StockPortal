import React, { useState } from 'react';
import Dashboard from '../loggedIn/dashboard/Dashboard'
import MyPortfolio from '../loggedIn/portfolio/MyPortfolio';
import SettingsPage from '../loggedIn/settings/SettingsPage';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import StartPage from '../start/StartPage';
import SideBar from '../loggedIn/sidebar/Sidebar'


const logOut = () =><div><h1>skräpskräpskräpskräpskräpskräpskräpskräp</h1> </div>;
const fyranollfyra = () => <div> fyra noll fyra </div>;

const isLoggedIn = false;


const Routes = (


    <BrowserRouter>
    {isLoggedIn ? <div>
        <Redirect exact from="/" to="/loggin:isLoggedIn"></Redirect>
        <StartPage sendData = {isLoggedIn}/> </div>:
    <div>
    
    <SideBar/>
    <Redirect exact from="/" to="/home"></Redirect>
    <Switch>
    <Route exact ={true} path="/loggin:isLoggedIn" component={StartPage} ></Route>
    <Route path ="/disconnect" component ={StartPage} />
    <Route exact ={true} path ="/home" component ={Dashboard} />
    <Route exact ={true} path ="/my_portfolio" component ={MyPortfolio} />
    <Route exact ={true} path ="/settings" component ={SettingsPage} />
    <Route component={fyranollfyra} />
    </Switch>
    </div>
}
    </BrowserRouter>
        
    );

export default Routes;