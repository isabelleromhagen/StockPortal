import React from "react";

const UpdateDate=()=>{
    let newDate = new Date();
    let date = newDate.getDate();
    let dateHuman = (date <= 9) ? "0" + date : date;
    let month = newDate.getMonth() + 1;
    let monthHuman = (month <= 9) ? "0" + month : month;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let min = newDate.getMinutes();
    let minHuman = (min <= 9) ? "0" + min : min;
    return (
       // `Latest update ${this.year}-${this.monthHuman}-${this.dateHuman} ${this.hour}:${this.minHuman}`
           <div>{year + "-" + monthHuman + "-" + dateHuman + "  " + hour + ":" + minHuman}</div> 
        );
};export default UpdateDate;