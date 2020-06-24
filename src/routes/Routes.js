import React, { useState } from 'react';
import Dashboard from '../loggedIn/dashboard/Dashboard'
import MyPortfolio from '../loggedIn/portfolio/MyPortfolio';
import SettingsPage from '../loggedIn/settings/SettingsPage';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import StartPage from '../start/StartPage';
import SideBar from '../loggedIn/sidebar/Sidebar'
import FyraNollFyra from '../loggedIn/404error/fyranollfyra';
import { RootRef } from '@material-ui/core';
import ProtectedRoute from '../component/ProtectedRouteComp'


const Routes = (


    <BrowserRouter>
    
    <div>  
    <ProtectedRoute path ='/' component={SideBar} />
    <Route to='/'> <Redirect to='/loggin'/> </Route>
    <Switch>
    <Route path="/loggin" component={StartPage} exact ={true} />
    <ProtectedRoute exact ={true} path ="/home" component ={Dashboard} />
    <ProtectedRoute exact ={true} path ="/my_portfolio" component ={MyPortfolio} />
    <ProtectedRoute exact ={true} path ="/settings" component ={SettingsPage} />
    <Route component={FyraNollFyra} />
    </Switch>
    </div>

    </BrowserRouter>
        
    );

export default Routes;  