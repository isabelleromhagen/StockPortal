import React, { useState } from 'react';
import Dashboard from '../loggedIn/dashboard/Dashboard'
import MyPortfolio from '../loggedIn/portfolio/MyPortfolio';
import SettingsPage from '../loggedIn/settings/SettingsPage';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import StartPage from '../start/StartPage';
import SideBar from '../loggedIn/sidebar/Sidebar'
import FyraNollFyra from '../loggedIn/404error/fyranollfyra';
import ProtectedRoute from '../component/ProtectedRouteComp'
import Auth from './Authenticated';

const Routes = (

    <BrowserRouter>
    
    <div>  

    {((Auth.isAuthenticated) && window.location.pathname ==="/") ? <Redirect to ="/home"/> : null}

    <ProtectedRoute exact ={true} path ={["/home","/my_portfolio","/settings"]} component={SideBar} />
    <Switch>

    <Route exact ={true} path ='/' component={StartPage} />

    <ProtectedRoute exact ={true} path ="/home" component ={Dashboard} />
    <ProtectedRoute exact ={true} path ="/my_portfolio" component ={MyPortfolio} />
    <ProtectedRoute exact ={true} path ="/settings" component ={SettingsPage} />
    <Route component={FyraNollFyra} />
    </Switch>
    </div>

    </BrowserRouter>
        
    );

export default Routes;  