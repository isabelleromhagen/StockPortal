import React from 'react';


<<<<<<< HEAD
const FormInput = ({headline, type, name, register, placeholder,inputvalue}) => {
=======
const FormInput = ({headline, type, name, register, placeholder,imageInputId}) => {
>>>>>>> MattiasDev
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
