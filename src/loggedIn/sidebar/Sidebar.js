import React, {useState, useEffect} from 'react';
import '../../styling/SideBar.css' 
import molndal from '../../images/molndal.png';
import LinkComponent from '../../component/LinkComp';
import Auth from '../../routes/Authenticated';


const nameArr =[['Hem','fa fa-home'], 
['Min Portfölj','fa fa-briefcase'],
['Inställingar','fa fa-cogs'],
['Logga_ut','fa fa-sign-out']];

const views = ["/home","/my_portfolio","/settings","/"];

const SideBar = (props) =>{

    
    const [viewState, setViewState] = useState(views[0]);


    useEffect(()=>{
        console.log("new View:  " + viewState);
    })

    const logoutAction = () =>{
        console.log("nej")
        Auth.logout(()=>{
            props.history.push("/loggin");
        });
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
            <button onClick ={logoutAction} > log out again</button>
            <img src={molndal} id ="sideImageLoggo" alt="campusImage"></img>
            {generateLinks}
            </div>
        )
       

};


export default SideBar;