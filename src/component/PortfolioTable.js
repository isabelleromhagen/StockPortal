import React from "react";
import ButtonComponent from "./ButtonComp";

const PortfolioTable = ({ company, holdingValue, type, holdingAmount, stockNumber, owns, voteValue,
    btnName, onClickFucntion, btnClassName, btnID }) => {
    return (
        <tr>
            <td>{company}</td>
            <td>{holdingValue}</td>
            <td>{type}</td>
            <td>{holdingAmount}</td>
            <td>{stockNumber}</td>
            <td>{owns}</td>
            <td>{voteValue}</td>
            <td>{<ButtonComponent btnID={btnID}>{btnName}</ButtonComponent>}
            </td>
        </tr>
    )
}
export default PortfolioTable;