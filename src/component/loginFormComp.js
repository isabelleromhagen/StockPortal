import React from 'react';


const FormComp = ({ formHeadline, inputFields, onSubmitAction }) => {
    return (
        <div>
            <form onSubmit = {onSubmitAction}>
                <h1>{formHeadline}</h1>
                {inputFields}
                <br />
                <input type='submit' />
            </form>
        </div>
    );
  };

  const InputField = ({headline ,type, name, onChangeAction}) => {
    return (
    <div>
        <p>{headline}</p>
        <input
        type={type}
        name={name}
        onChange={onChangeAction}
        />
    </div>
    );
  };

  export default FormComp;