import React from 'react';


const FormComp = ({ headline, inputFields, onSubmitAction }) => {
    return (
        <div>
            <form onSubmit = {onSubmitAction}>
                <h1>{headline}</h1>
                {inputFields}
                <br />
                <input type='submit' />
            </form>
        </div>
    );
  };

  export default FormComp;