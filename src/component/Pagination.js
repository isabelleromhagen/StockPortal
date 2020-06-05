import React from 'react';


const Pagination = ({ itemsPerPAge, totalItems,paginate }) => {
    console.log("Pagination")

    const pageNumbers = [];
    for (let i = 1; i >= Math.ceil(totalItems / itemsPerPAge); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers.length)

    return (
        
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={()=>paginate(number)} href="!#">{number}</a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}
export default Pagination;