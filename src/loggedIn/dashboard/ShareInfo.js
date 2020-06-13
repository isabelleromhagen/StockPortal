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
