import React, { useState } from "react";
import './styling/portfolio.css'
import TablePagination from "@material-ui/core/TablePagination";
//import CompanyData from './Data/mockData.json';
import PortfolioTable from "./component/PortfolioTable";
import Pagination from "./component/Pagination";
const headerTitleList = ["Företag", "Innehav", "Aktietyp", "Antal Aktier", "Aktienummer", "Ägarandel", "Röstvärde"];
let amountToshow = 10;
const updateDate=()=>{
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
            year + "-" + monthHuman + "-" + dateHuman + "  " + hour + ":" + minHuman
        );
}

const tableHeaderList = () => (headerTitleList.map((elem) => <th>{elem}</th>));

const MyPortfolio = ({ CompanyData }) => {
    const [latestUpdate, getLatestUpdate] = useState(updateDate);
    const [items, setItems] = useState(CompanyData);
    const [header] = useState(tableHeaderList());
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => { setPage(newPage); };
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, amountToshow));
        setPage(0);
    };


    const currentItems = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (

        <div className="container">

            <div>
                <h4>MyPortfolio</h4>
                <p>{latestUpdate}</p>
                <table>
                    <tbody>
                        {header}
                        {currentItems.map((elem, index) =>
                            <PortfolioTable
                                className={"table"}
                                key={index}
                                company={elem.company}
                                holdingValue={elem.holdingValue}
                                type={elem.type}
                                holdingAmount={elem.holdingAmount}
                                stockNumber={elem.stockNumber}
                                owns={elem.owns}
                                voteValue={elem.voteValue}
                                btnClassName={"downloadBtn"}
                                btnID={index}
                                btnIcon={"fa fa-download"}

                            />
                        )}
                    </tbody>
                </table>
            </div>
            <hr></hr>
            <div>
                <TablePagination className={"paginationBar"}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    count={items.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
        </div>
    )
}

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