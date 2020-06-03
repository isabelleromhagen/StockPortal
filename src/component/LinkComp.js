import React from 'react';


const LinkComponent = ({ linkName, linkClass, linkID, onClick }) => {
    return (
        <a
        href={onClick}
        className ={linkClass}
        id ={linkID}
        key ={linkID}
        >
        {linkName}
        </a>
    );
  };

  export default LinkComponent;