import React from 'react';
import './styling/SideBar.css' 
import LinkComponent from './component/LinkComp';

class SideBar extends React.Component {

    constructor(props){
        super(props)

        this.state ={
        }
        this.dashboard =this.dashboard.bind(this);
    }

    dashboard(){
        console.log('dashboard');
    }

    render(){
        return(
            <div className="sidediv">
              <a className ="sidbar" onClick={this.dashboard}>Hem</a>
              <a className ="sidbar" href="myPortfolio">Min Portfölj</a>
              <a className ="sidbar" href="#settings">Inställningar</a>
              <a className ="sidbar" href="logout">Logga ut</a>
            </div>
        )
        

    }
}

export default SideBar;