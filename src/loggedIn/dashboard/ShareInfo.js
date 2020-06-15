import React from 'react'

const ShareInfo = ({share, index}) => {
        return(
                <div key={index}>
                    <div style={{
                        backgroundColor: share.backgroundColor,
                        width: "20px",
                        height: "20px",
                        float: "left",
                        margin: "1vh"}}></div>
                    <p>{share.industri}</p>
                    <p>{share.companyName}</p>
                    <p style={{float: "right"}}>{share.amount} SEK</p>
                </div>
        );
};

export default ShareInfo;
