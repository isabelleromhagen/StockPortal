import React from 'react';


const ButtonComponent = ({ btnName, onClickFunction, btnClassName, btnID,btnIcon,btnValue }) => {
    return (
      <button onClick={onClickFunction}
      className = {btnClassName}
      id = {btnID}
      key ={btnID}
      value = {btnValue}
      ><i className={btnIcon}></i>
        {btnName}
      </button>
    );
  };

  export default ButtonComponent;