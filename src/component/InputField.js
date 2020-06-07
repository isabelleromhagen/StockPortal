import React, { useState } from 'react';


const InputField = ({headline ,type, name, onChangeAction}) => {
    return (
    <div>
        <p>{headline}</p>
        <input
        type={type}
        name={name}
        onChange={ () => onChangeAction('Kalle')}
        />
    </div>
    );
  };

  export default InputField;