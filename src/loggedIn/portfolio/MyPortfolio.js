import React, { useState, useEffect } from "react";
import '../../styling/portfolio.css';
import TablePagination from "@material-ui/core/TablePagination";
import PortfolioTable from "../../component/PortfolioTable";
const headerTitleList = ["Företag", "Innehav", "Aktietyp", "Antal Aktier", "Aktienummer", "Ägarandel", "Röstvärde"];




const tableHeaderList = () => (headerTitleList.map((elem) => <th key={elem}>{elem}</th>));

const MyPortfolio = () => {
    let amountToshow = 10;
    const site = "Min portfölj";
    const [lastupdate, setlastUpdate] = useState();
    const [items, setItems] = useState([]);
    const [header] = useState(tableHeaderList());
    const id_token = localStorage.getItem('id_token');
    const [page, setPage] = useState(0);
    const [currentItems, setCurrentItems] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(amountToshow);
    const handleChangePage = (e, newPage) => { setPage(newPage); };
    const handleChangeRowsPerPage = e => {
        setRowsPerPage(parseInt(e.target.value, amountToshow));
        setPage(0);
    };



    useEffect(() => {
        fetch("http://localhost:3001/portfolio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_token
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if(data[0]) {
                console.log(data[0])
                setCurrentItems(data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
                let date = new Date(data[0].datepurchased);
                setlastUpdate(date.toLocaleDateString());
                }
                
            })
    }, []);

    const Stocks = () => {
        return (
            <>{currentItems.map((elem, index) =>
                <PortfolioTable
                    key={index}
                    companyname={elem.companyname}
                    holdingValue={elem.stockvalue}
                    type={elem.stocktype}
                    holdingAmount={elem.amount}
                    stockNumber={elem.stocknumber}
                    owns={elem.ownamount}
                    voteValue={elem.votevalue}
                    btnIcon={"fa fa-download"}

                />)
            }</>)
    };


    return (
        <div className="background">
            <div id="header"> <h4 > {site} </h4> | <p id="headerText">{lastupdate}</p></div>
            <div className="portFolio-container">

                <table id="portfolio-table">
                    <thead>
                        <tr>
                            {header}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems ? <Stocks /> : <p>  Du har inget innehav</p>}


                    </tbody>
                </table>

                <TablePagination
                    component="portFolio-container"
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