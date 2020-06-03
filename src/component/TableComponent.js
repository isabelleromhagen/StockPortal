import React from "react";
import ButtonComponent from "./ButtonComp";

const TableComponent = ({ company, holdingValue, type, holdingAmount,
    stockNumber, owns, voteValue, buttonText, buttonClickFunction, buttonClassName, buttonId }) => {
    return (
        <tr>
            <td>{company}</td>
            <td>{holdingValue}</td>
            <td>{type}</td>
            <td>{holdingAmount}</td>
            <td>{stockNumber}</td>
            <td>{owns}</td>
            <td>{voteValue}</td>
            <td>{<ButtonComponent btnName={buttonText} onClickFucntion={buttonClickFunction} btnClassName={buttonClassName} btnID={buttonId} />}</td>
        </tr>
    )
}
export default TableComponent;