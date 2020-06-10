import React from 'react';


const InputCheckbox = ({headline, name, onChangeAction, checked}) => {
    return (
    <div>
        <p>{headline}</p>
        <input
        type="checkbox"
        name={name}
        onChange={ event => onChangeAction(event.target.checked)}
        checked = {checked}
        />
    </div>
    );
  };

  export default InputCheckbox;