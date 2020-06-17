import React, {useState, useEffect} from 'react';
import '../../styling/SideBar.css' 
import molndal from '../../images/molndal.png';
import LinkComponent from '../../component/LinkComp';



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


export default SideBar;