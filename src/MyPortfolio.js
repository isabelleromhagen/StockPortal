import React, { Component } from "react";
import TableComponent from './component/TableComponent';
import CompanyData from './Data/mockData.json';
import Pagination from './component/Pagination'
let headerTitleList = ["Företag", "Innehav", "Aktietyp", "Antal Aktier", "Artikelnummer", "Ägarandel", "Röstvärde"];


let amountToshow = 20;



class MyPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableArray: this.listOfStocksToShow(),
            headerTitleList: this.tableHeaderList(),
            amountToshow:this.amountToshow,

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
      //  const indexOfLastPost=currentPage*postPerPAge;
       // const indexOfFirstPost=indexOfLastPost-postPerPAge;
       // const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)
        return (
            <div>
                <h2>Min Portfölj</h2>
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
