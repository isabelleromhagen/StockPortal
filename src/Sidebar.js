import React from 'react';
import './styling/SideBar.css' 
import ButtonComponent from './component/ButtonComp';

const nameArr =['Hem', 'Min Portfölj','Inställingar','Logga ut'];

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
            nameArr.map((elem)=>{

              return <div
               className = 'sidebar'
               
               > <ButtonComponent
                btnName = {elem}
                btnClassName ="sideButton"
                btnID = {elem}
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