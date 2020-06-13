import React, { useState, useEffect } from "react";
import '../../styling/portfolio.css';
import TablePagination from "@material-ui/core/TablePagination";
import PortfolioTable from "../../component/PortfolioTable";
const headerTitleList = ["Företag", "Innehav", "Aktietyp", "Antal Aktier", "Aktienummer", "Ägarandel", "Röstvärde"];
const site = "Min portfölj";
let amountToshow = 10;

// Redundent when we have database connection.
const updateDate = () => {
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
        //   `LaStocks update ${this.year}-${this.monthHuman}-${this.dateHuman} ${this.hour}:${this.minHuman}`
        ("Senast uppdaterat " + year + "-" + monthHuman + "-" + dateHuman + "  " + hour + ":" + minHuman)
    );
}

const tableHeaderList = (index) => (headerTitleList.map((elem) => <th key={index}>{elem}</th>));

const MyPortfolio = ({ CompanyData }) => {
    const [isInlogged,setIsinlogged ]=useState(false); //TODO fix the metod for login
    const [laStocksUpdate, setLaStocksUpdate] = useState(updateDate);
    const [items, setItems] = useState([]);
    const [header] = useState(tableHeaderList());
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(amountToshow);
    const handleChangePage = (e, newPage) => { setPage(newPage); };
    const handleChangeRowsPerPage = e => {
        setRowsPerPage(parseInt(e.target.value, amountToshow));
        setPage(0);
    };
    const currentItems = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
    useEffect(() => {
        setItems(isInlogged ? CompanyData: [])
      },[]);
  

const Stocks=()=>{ return (currentItems.map((elem, index) =>
    <PortfolioTable
        key={index}
        company={elem.company}
        holdingValue={elem.holdingValue}
        type={elem.type}
        holdingAmount={elem.holdingAmount}
        stockNumber={elem.stockNumber}
        owns={elem.owns}
        voteValue={elem.voteValue}
        ClassName={"downloadBtn"}
        btnID={index}
        btnIcon={"fa fa-download"}
    />)
)};
    

    return (
        <div className="background">
           <div id="header"> <h4 > {site}  </h4> | <p id="headerText">{laStocksUpdate}</p></div>
            <div className="portFolio-container">

                <table id="portfolio-table">
                    <thead>
                        <tr>
                            {header}
                        </tr>
                    </thead>
                    <tbody>
                    {items.length>0 ? <Stocks/>: <p>Du har inget innehav</p> }

                       
                    </tbody>
                </table>

                <TablePagination
                    component="portfolio-table"
                    rowsPerPageOptions={[5, 10, 25, 50, 75]}
                    count={items.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />

            </div>
        </div>

    );
};
export default MyPortfolio;