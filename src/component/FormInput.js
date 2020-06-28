import React from 'react';


const FormInput = ({headline, type, name, register, placeholder,inputvalue}) => {
    return (
    <div>
        <p>{headline}</p>
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={register}
        value={inputvalue}
        
        />
    </div>
    );
  };

  export default FormInput;
