import React from 'react'

const ShareInfo = ({share, index}) => {
        return(
                <div key={index}>
                    <div color={"blue"}></div>
                    <p>{share.industri}</p>
                    <p>{share.companyName}</p>
                    <p>{share.amount}</p>
                </div>
        );
};

export default ShareInfo;

// <div>
//             <div id="barDiagram"></div>
//                 {shares.map((share, index) => 
//                     <div key={index}>
//                         <div color={shares[index].color}></div>
//                         <p>{share.sectorname}</p>
//                         <p>{share.companynames}</p>
//                         <p>{share.value}</p>
//                     </div>)}
//             </div>