import React from 'react';


const FormComp = ({ headline, inputFields, onSubmitAction, buttonId, value, isDisabled, className,headlineClass }) => {
    return (
        <div className={className}>
            <form onSubmit = {onSubmitAction} >
                <h1 className ={headlineClass}>{headline}</h1>
                {inputFields}
                <br />
                <input disabled ={isDisabled} type='submit' id={buttonId} value={value}/> 
            </form>
        </div>
    );
  };

  export default FormComp;