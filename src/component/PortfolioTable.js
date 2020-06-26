import React from "react";
import ButtonComponent from "./ButtonComp";

const PortfolioTable = ({ companyname, holdingValue, type, holdingAmount, stockNumber, owns, voteValue, btnIcon }) => {
    return (
        <tr>
            <td key>{companyname}</td>
            <td>{holdingValue} {"SEK"}</td>
            <td>{type}</td>
            <td>{holdingAmount}</td>
            <td>{stockNumber}</td>
            <td>{owns}</td>
            <td>{voteValue}</td>
            <td>{<ButtonComponent 
                btnIcon={btnIcon}                
                ></ButtonComponent>}
            </td>
        </tr>
    )
}
export default PortfolioTable;