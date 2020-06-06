import React, { useState } from "react";
import './styling/portfolio.css'
import TablePagination from "@material-ui/core/TablePagination";
//import CompanyData from './Data/mockData.json';
import PortfolioTable from "./component/PortfolioTable";
import Pagination from "./component/Pagination";
const headerTitleList = ["Företag", "Innehav", "Aktietyp", "Antal Aktier", "Aktienummer", "Ägarandel", "Röstvärde"];
// props = {
//     date: PropTypes.instanceOf(Date).isRequired,
//     updateInterval: PropTypes.number
//   };
let amountToshow = 10;

const tableHeaderList = () => (headerTitleList.map((elem) => <th>{elem}</th>));

const MyPortfolio = ({ CompanyData }) => {
    const [items, setItems] = useState(CompanyData);
    const [header] = useState(tableHeaderList());
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => { setPage(newPage); };
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // componentDidMount() {
    //     this.intervalUpdate = setInterval(() => {
    //       this.forceUpdate();
    //     }, this.props.updateInterval);
    //   }
        
    //   componentWillUnmount() {
    //     if (this.intervalUpdate) {
    //       clearInterval(this.intervalUpdate);
    //       this.intervalUpdate = null;
    //     }
    //   }
    // const [itemsPerPage, setItemPerPage] = useState(amountToshow);
    //const indexOfLastItem = currentPage * itemsPerPage;
    //const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    //const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="container">

            <div>
                <h4>MyPortfolio</h4>
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

            <TablePagination className={"paginationBar"}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                count={items.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
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