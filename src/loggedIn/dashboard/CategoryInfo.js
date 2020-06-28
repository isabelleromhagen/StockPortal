import React from 'react'

const CategoryInfo = ({category, stockvalue}) => {
    return(
        <div style={{float: "left", marginTop: "2vw", width: "100%"}}>
            <div style={{
                backgroundColor: category.color,
                width: "20px",
                height: "20px",
                
                }}></div>
                <p style={{marginLeft: "10vw", marginBottom: "2vh", fontWeight: "bold"}}>{category.catname}</p>
                {
                    category.companies.map((company, index) => <p style={{display: "inline", marginLeft: "2vw", marginTop: "5vh"}} key={index}>{company}</p>)
                }
                <p style={{float: "right"}}>{stockvalue} SEK</p>
        </div>
    );
};

export default CategoryInfo;
