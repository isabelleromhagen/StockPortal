import React, { Component } from "react";
import TableComponent from './component/TableComponent';
import ButtonComponent from './component/ButtonComp';

class MyPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {}


    }
    render() {
        return (
            <div>
                <h2>Min Portfölj</h2>
                <div>
                <table>
                <tbody>
                <th>Företag</th>
                <th>Innehav</th>
                <th>Aktietyp</th>
                <th>Antal Aktier</th>
                <th>Artikelnummer</th>
                <th>Ägarandel</th>
                <th>Röstvärde</th>

                </tbody>
                </table>
                </div>
            </div>
        )

    }
}
export default MyPortfolio;
