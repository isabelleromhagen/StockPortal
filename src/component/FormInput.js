import React from 'react';


const FormInput = ({headline, type, name, register, placeholder}) => {
    return (
    <div>
        <p>{headline}</p>
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={register}
        
        />
    </div>
    );
  };

  export default FormInput;
