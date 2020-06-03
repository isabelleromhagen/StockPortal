import React from 'react';


const ButtonComponent = ({ btnName, onClickFucntion, btnClassName, btnID }) => {
    return (
      <button onClick={onClickFucntion}
      className = {btnClassName}
      id = {btnID}
      key ={btnID}
      >
        {btnName}
      </button>
    );
  };

  export default ButtonComponent;