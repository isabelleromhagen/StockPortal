import React, { Component } from "react";
import TableComponent from './component/PortfolioTable';
import CompanyData from './Data/mockData.json';
import PaginatedList from 'react-paginated-list'
let headerTitleList = ["Företag", "Innehav", "Aktietyp", "Antal Aktier", "Aktienummer", "Ägarandel", "Röstvärde"];


let amountToshow = 20;




class MyPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableArray: this.listOfStocksToShow(),
            headerTitleList: this.tableHeaderList(),
            currentPage:1,
            postPerPage:this.amountToshow,

        }

    }
    tableHeaderList() {
        headerTitleList = headerTitleList.map((elem) => <th>{elem}</th>)
        return headerTitleList;
    }

    listOfStocksToShow() {
        const tableArray = [];
        for (let i = 0; i < amountToshow; i++) {
            tableArray.push(CompanyData[i]);
        }
        return tableArray;
    }
    


    render() {
 
        return (
            <div>
                <h3>Min Portfölj</h3>
                <div>
                    <table>
                        <tbody>
                    
                            {this.state.headerTitleList}

                            {this.state.tableArray.map((elem) =>
                                <TableComponent
                                    company={elem.company}
                                    holdingValue={elem.Innehav}
                                    type={elem.Aktietyp}
                                    holdingAmount={elem.antalaktier}
                                    stockNumber={elem.Aktienummer}
                                    owns={undefined}
                                    voteValue={elem.Röstvärde}
                                    buttonText={"Download"}
                                    buttonClassName={"onclickDownload"}
                                    buttonId={"downloadbtn"}
                                />
                            )}
                        



                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}
 export default MyPortfolio;
// const indexOfLastPost=this.state.currentPage*this.state.postPerPAge;
// const indexOfFirstPost=this.indexOfLastPost-this.state.postPerPAge;
// const currentPost=this.state.tableArray.slice(indexOfFirstPost,indexOfLastPost);

// const paginate = pageNumer => this.setState(pageNumer);
// <Pagination 
// postPerPAge={this.state.postPerPage}
// totalPosts={this.currentPost.length}
// paginate={paginate}
// />