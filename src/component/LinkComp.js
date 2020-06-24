import React from 'react';
import {NavLink} from 'react-router-dom';

const LinkComponent = ({ linkName, linkClass, linkID, onClickLink, linkIcon }) => {
 
  return (
        <NavLink
        to={onClickLink}
        id={linkID}
        activeClassName ={linkClass}
        className ={linkClass}
        >
        {(linkID && linkID ==='Logga_ut') ? <hr id="logg_out_line"></hr> :null}
        <i className={linkIcon}></i>
          {" "+linkName}
        </NavLink>
    );
  };

  export default LinkComponent;