import React from 'react';
import './styling/SideBar.css' 
import LinkComponent from './component/LinkComp';

const linkNameArr =['Hem','Min portfölj','Inställingar','Logga ut'];

class SideBar extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            links:[linkNameArr.length]
        }
    }

    getLinks(){
        links = linkNameArr.map()
    }

    render(){
        return(
            <div class="sidediv">
              <a className ="sidbar" href="dashboard">Hem</a>
              <a className ="sidbar" href="myPortfolio">Min Portfölj</a>
              <a className ="sidbar" href="#settings">Inställningar</a>
              <a className ="sidbar" href="logout">Logga ut</a>
            </div>
        )
        

    }
}

export default SideBar;