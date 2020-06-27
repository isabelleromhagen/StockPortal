import React from 'react';

    const PersonalData = ({firstname, lastname, pNum}) => {
        return(
            <div id="personalData">
                <h4>{firstname} {lastname}</h4>
            </div> 
        );
    }

export default PersonalData;