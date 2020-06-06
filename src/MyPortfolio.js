import React, { useState } from "react";
//import CompanyData from './Data/mockData.json';
import PortfolioTable from "./component/PortfolioTable";
import Pagination from "./component/Pagination";
import ButtonComponent from "./component/ButtonComp";
const headerTitleList = ["Företag", "Innehav", "Aktietyp", "Antal Aktier", "Aktienummer", "Ägarandel", "Röstvärde"];
const amountToshow = 10;

const tableHeaderList = () => (headerTitleList.map((elem) => <th>{elem}</th>));

const MyPortfolio = ({ CompanyData }) => {
    const [items, setItems] = useState(CompanyData);
    const [header] = useState(tableHeaderList());
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [pagemNumers,setpageNumbers]=useState();


   

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(items.length);
    console.log(currentPage)


    return (
        <div className="container">

            <div>
                <h4>MyPortfolio</h4>
                <table>
                    <tbody>
                        {header}
                        {currentItems.map((elem, index) =>
                            <PortfolioTable
                                company={elem.company}
                                holdingValue={elem.holdingValue}
                                type={elem.type}
                                holdingAmount={elem.holdingAmount}
                                stockNumber={elem.stockNumber}
                                owns={elem.owns}
                                voteValue={elem.voteValue}
                                btnID={index}
                                btnName={"Delete"}
                            />
                        )}
                    </tbody>
                </table>
            </div>
            <div className="pagination" style={{ marginTop: "60", backgroundColor: "orange" }}>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    
                    paginate={paginate} />
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