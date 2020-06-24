import React from 'react';


const FormComp = ({ headline, inputFields, onSubmitAction, buttonId, value, isDisabled }) => {
    return (
        <div>
            <form onSubmit = {onSubmitAction}>
                <h1>{headline}</h1>
                {inputFields}
                <br />
                <input disabled ={isDisabled} type='submit' id={buttonId} value={value}/> 
            </form>
        </div>
    );
  };

  export default FormComp;