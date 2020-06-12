import React from 'react';
import ButtonComponent from '../../component/ButtonComp';
import ShareInfo from './ShareInfo';


    const Shareholding = ({shares}) => {
        let getTotalValue = () => {
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
        return(
            <div id="propertyDiv" className="container">
                <h4 className="dashboardSubtitle">Mitt innehav</h4>
                <ButtonComponent btnClassName="dashboardBtn" btnName={"Min Portfölj"}/>
                <div className="content">
                    <h1>{getTotalValue()} SEK</h1>
                    <div id="barDiagram"></div>

                    {shares.length > 0 ? 
                            shares.map((share, index) => 
                            <ShareInfo share={share} key={index}/>)
                        : 
                            <h2>Inget innehav tillagt ännu</h2>
                    })
                   
                </div>
            </div>
        );
    }

export default Shareholding;