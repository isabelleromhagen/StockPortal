import React, { useState } from "react";
import './styling/portfolio.css'
import TablePagination from "@material-ui/core/TablePagination";
//import CompanyData from './Data/mockData.json';
import PortfolioTable from "./component/PortfolioTable";
import Pagination from "./component/Pagination";
const headerTitleList = ["Företag", "Innehav", "Aktietyp", "Antal Aktier", "Aktienummer", "Ägarandel", "Röstvärde"];
const site = "Min portfölj";
let amountToshow = 10;

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
        //   `Latest update ${this.year}-${this.monthHuman}-${this.dateHuman} ${this.hour}:${this.minHuman}`
        ("Senast uppdaterat " + year + "-" + monthHuman + "-" + dateHuman + "  " + hour + ":" + minHuman)
    );
}

const tableHeaderList = (index) => (headerTitleList.map((elem) => <th key={index}>{elem}</th>));

const MyPortfolio = ({ CompanyData }) => {
    const [latestUpdate, getLatestUpdate] = useState(updateDate);
    const [items, setItems] = useState(CompanyData);
    const [header] = useState(tableHeaderList());
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(amountToshow);
    const handleChangePage = (e, newPage) => { setPage(newPage); };
    const handleChangeRowsPerPage = e => {
        setRowsPerPage(parseInt(e.target.value, amountToshow));
        setPage(0);
    };
    const currentItems = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <div className="background">
            <h4 id="header"> {site}  | <p id="headerText">{latestUpdate}</p></h4>
            <div className="portFolio-container">

                <table id="portfolio-table">
                    <thead>
                        <tr>
                            {header}
                        </tr>
                    </thead>
                    <tbody>

                        {currentItems.map((elem, index) =>
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
                            />
                        )}
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

// class MyPortfolio extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             tableArray: this.listOfStocksToShow(),
//             headerTitleList: this.tableHeaderList(),
//             currentPage:1,
//             postPerPage:this.amountToshow,

//         }

//     }
//     tableHeaderList() {
//         headerTitleList = headerTitleList.map((elem) => <th>{elem}</th>)
//         return headerTitleList;
//     }

//     listOfStocksToShow() {
//         const tableArray = [];
//         for (let i = 0; i < amountToshow; i++) {
//             tableArray.push(CompanyData[i]);
//         }
//         return tableArray;
//     }



//     render() {

//         return (
//             <div>
//                 <h3>Min Portfölj</h3>
//                 <h3>Min Portfölj</h3>

//                 <div>
//                     <table>
//                         <tbody>

//                             {this.state.headerTitleList}

//                             {this.state.tableArray.map((elem) =>
//                                 <TableComponent
//                                     company={elem.company}
//                                     holdingValue={elem.Innehav}
//                                     type={elem.Aktietyp}
//                                     holdingAmount={elem.antalaktier}
//                                     stockNumber={elem.Aktienummer}
//                                     owns={undefined}
//                                     voteValue={elem.Röstvärde}
//                                     buttonText={"Download"}
//                                     buttonClassName={"onclickDownload"}
//                                     buttonId={"downloadbtn"}
//                                 />
//                             )}




//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )

//     }
// }
// const indexOfFirstPost=this.indexOfLastPost-this.state.postPerPAge;
// const currentPost=this.state.tableArray.slice(indexOfFirstPost,indexOfLastPost);

// const paginate = pageNumer => this.setState(pageNumer);
// <Pagination 
// postPerPAge={this.state.postPerPage}
// totalPosts={this.currentPost.length}
// paginate={paginate}
// />

// <div className="pagination">
// <Pagination
//     itemsPerPage={itemsPerPage}
//     totalItems={items.length} 
//     paginate={paginate} />

// </div>