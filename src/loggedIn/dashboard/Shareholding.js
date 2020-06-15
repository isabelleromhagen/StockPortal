import React from 'react';
import ButtonComponent from '../../component/ButtonComp';
import ShareInfo from './ShareInfo';



    const Shareholding = ({shares}) => {
        const getTotalValue = () => {
                if(shares.length > 0) {
                    return shares.map((item) => {
                        return item.amount;
                    }).reduce((total, amount) => {
                        return total + amount;
                    });
                } else {
                    return 0;
                }              
            }
            const getBarSize = (index) => {
                let width = 0;
                if(shares.length > 0) {
                    width = (shares[index].amount/getTotalValue())*100;
                return width + '%';
                } else {
                    return 0;
                } 
            }
        return(
            <div id="propertyDiv" className="container">
                <h4 className="dashboardSubtitle">Mitt innehav</h4>
                <ButtonComponent btnClassName="dashboardBtn" btnName={"Min Portfölj"}/>
                    <h1>{getTotalValue()} SEK</h1>
                    <container id="fullbar">
                        {shares.length > 0 ? 
                            shares.map((share, index) => 
                            <div share={share} key={index} className="bar" style={{width: getBarSize(index), backgroundColor: shares[index].backgroundColor}}/>)
                        : 
                        <div></div>
                        }
                    </container>
                    {shares.length > 0 ? 
                            shares.map((share, index) => 
                            <ShareInfo className="shareInfo" share={share} key={index}/>)
                        : 
                            <h2>Inget innehav tillagt ännu</h2>
                    }
            </div>
        );
    }

export default Shareholding;

// <div className="bar" style={{width: getBarSize()}} ></div>