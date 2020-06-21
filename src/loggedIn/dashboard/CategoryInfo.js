import React from 'react'

const CategoryInfo = ({category, stockvalue}) => {
    return(
        <div>
            <div style={{
                backgroundColor: category.color,
                width: "20px",
                height: "20px",
                float: "left",
                margin: "1vh"}}></div>
                <p>{category.catname}</p>
                <p>{category.companies}</p>
                <p style={{float: "right"}}>{stockvalue} SEK</p>
        </div>
    );
};

export default CategoryInfo;