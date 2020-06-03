import React from 'react';


const ButtonComponent = ({ btnName, onClickFucntion, btnClassName, btnID,btnIcon }) => {
    return (
      <button onClick={onClickFucntion}
      className = {btnClassName}
      id = {btnID}
      key ={btnID}
      
      ><i class={btnIcon}></i>
        {btnName}
      </button>
    );
  };

  export default ButtonComponent;