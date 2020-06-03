import React from 'react';
import './styling/SideBar.css' 
import ButtonComponent from './component/ButtonComp';
import home from './resources/home.jpg';
import logout from './resources/logout.png';
import portfolio from './resources/portfolio.jpg';
import tools from './resources/tools.jpg';

const nameArr =[['Hem','fa fa-home'], 
['Min Portfölj','fa fa-briefcase'],
['Inställingar','fa fa-cogs'],
['Logga ut','fa fa-sign-out']];

class SideBar extends React.Component {

    constructor(props){
        super(props)

        this.state ={
        }
        this.dashboard =this.dashboard.bind(this);
        this.generateButtons = this.generateButtons.bind(this);
    }

    generateButtons(){
        return(
            nameArr.map(([name,iconname])=>{

              return <div
               className = 'sidebar'

               > <ButtonComponent 
                btnIcon = {iconname}
                btnName = {name}
                btnClassName ="sideButton"
                btnID = {name+iconname}
                onClickFucntion ={this.dashboard}
                />
                
                </div>
            }))
        
    }

    dashboard(){
        console.log('dashboard');
    }

    render(){
        return(
            <div className="sidediv">
            {this.generateButtons()}
            
            </div>
        )
        

    }
}

export default SideBar;