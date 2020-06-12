import React from 'react';

    const PersonalData = ({firstname, lastname, pNum}) => {
        return(
            <div id="personalData">
                <h4>{firstname} {lastname}</h4>
                <p>Person-/organisationsnummer</p>
                <p>{pNum}</p>
            </div> 
        );
    }

export default PersonalData;