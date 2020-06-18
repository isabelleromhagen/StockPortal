import React from 'react';
import { NavLink } from 'react-router-dom';
import ShareInfo from './ShareInfo';



    const Shareholding = ({shares}) => {
        const getTotalValue = () => {
                if(shares.length > 0) {
                    return shares.map((item) => {
                        return item.stockvalue;
                    }).reduce((total, stockvalue) => {
                        return total + stockvalue;
                    });
                } else {
                    return 0;
                }              
            }
            const getBarSize = (index) => {
                let width = 0;
                if(shares.length > 0) {
                    width = (shares[index].stockvalue/getTotalValue())*100;
                return width + '%';
                } else {
                    return 0;
                } 
            }
        return(
            <div id="propertyDiv" className="container">
                <h4 className="dashboardSubtitle">Mitt innehav</h4>
                <NavLink className="dashboardBtn"  to={"/my_portfolio"}>Min portfölj</NavLink> 
                    <div> 
                        {shares.length > 0 && !null ?
                            <h1>{getTotalValue()} SEK</h1>
                                :
                            <h1>{0} SEK</h1>
                        }
                    </div>
                
                    <div id="fullbar">
                        {shares.length > 0 ? 
                            shares.map((share, index) => 
                            <div share={share} key={index} className="bar" style={{width: getBarSize(index), backgroundColor: shares[index].color}}/>)
                        : 
                        <div></div>
                        }
                    </div>
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