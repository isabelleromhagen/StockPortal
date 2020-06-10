import React, {useState} from 'react';
import './styling/SideBar.css' 
import ButtonComponent from './component/ButtonComp';

const nameArr =[['Hem','fa fa-home'], 
['Min Portfölj','fa fa-briefcase'],
['Inställingar','fa fa-cogs'],
['Logga ut','fa fa-sign-out']];

const views = ['DashBoard','My portfolio','Settings','Log out'];

const SideBar = () =>{

    const [viewState, setViewState] = useState("DashBoard");



    const changeViewState =(e) =>{
        setViewState(e.btnName);
        console.log(e.type);
        console.log(viewState);

    }


    const generateButtons = 
    nameArr.map(([name,iconname,index])=>{
      return  <div
       className = 'sidebar'>
        <ButtonComponent 
        btnIcon = {iconname}
        btnName = {name}
        btnClassName ="sideButton"
        btnID = {name+iconname}
        onClickFucntion ={changeViewState}
        />
        </div>
    })

    
        return(
            <div className="sidediv">
            {generateButtons}
            </div>
        )
       

};
/*
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
}*/

export default SideBar;