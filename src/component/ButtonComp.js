import React from 'react';


const ButtonComponent = ({ btnName, onClickFucntion, btnClassName, btnID,btnIcon,btnValue }) => {
    return (
      <button onClick={onClickFucntion}
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