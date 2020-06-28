import React from 'react';


const InputField = ({headline ,type, name, onChangeAction,InputClass}) => {
    return (
    <div>
        <p>{headline}</p>
        <input
        className ={InputClass}
        type={type}
        name={name}
        onChange={ event => onChangeAction(event.target.value)}
        placeholder={headline}
        />
    </div>
    );
  };

  export default InputField;