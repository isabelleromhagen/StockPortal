import React from "react";
import ButtonComponent from "./ButtonComp";

const PortfolioTable = ({ company, holdingValue, type, holdingAmount, stockNumber, owns, voteValue,
    btnName, onClickFucntion, btnClassName, btnID,btnIcon }) => {
    return (
        <tr>
            <td key>{company}</td>
            <td>{holdingValue}</td>
            <td>{type}</td>
            <td>{holdingAmount}</td>
            <td>{stockNumber}</td>
            <td>{owns}</td>
            <td>{voteValue}</td>
            <td>{<ButtonComponent btnIcon={btnIcon}></ButtonComponent>}
            </td>
        </tr>
    )
}
export default PortfolioTable;