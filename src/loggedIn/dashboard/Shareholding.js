import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryInfo from './CategoryInfo';
import _ from 'lodash';



    const Shareholding = ({shares}) => {
            
            const getTotalValue = (values) => {
                if(values && values.length > 0 && typeof(values[0]) === 'object') {
                    return values.map((elemValue) => {
                        return elemValue.stockvalue;
                    }).reduce((total, stockvalue) => {
                        return total + stockvalue;
                    });
                } 
                if(values && values.length > 0) {
                    return values.map((value) => {
                        return value;
                    }).reduce((total, stockvalue) => {
                        return total + stockvalue;
                    });
                } else {
                    return 0;
                }              
            }

            const getBarSize = (index) => {
                let width = 0;
                if(shares.length > 0) {
                    width = (shares[index].stockvalue/getTotalValue(shares)) * 100;
                return width + '%';
                } else {
                    return 0;
                } 
            }

            const getCategories = () => {
                let categories = _.chain(shares).groupBy("catname").map(function(v,i){
                    return {
                        catname: i,
                        color: _.get(_.find(v, 'color'), 'color'),
                        companies: _.map(v, 'companyname'),
                        stockvalues: _.map(v, 'stockvalue')
                    }
                }).value();
                console.log('categories:', categories);
                return categories;
            }
            
        return(
            <div id="propertyDiv" className="dashboardContentContainer">
                <h4 className="dashboardSubtitle">Mitt innehav</h4>
                <NavLink className="dashboardBtn"  to={"/my_portfolio"}>Min portfölj</NavLink> 
                    <div> 
                        {shares.length > 0 ?
                            <h1>{getTotalValue(shares)} SEK</h1>
                                :
                            <h1>{0} SEK</h1>
                        }
                    </div>
                    <div id="fullbar">
                        {shares.length > 0 ? 
                            shares.map((share, index) => 
                            <div share={share} key={index} className="bar" style={{width: getBarSize(index), backgroundColor: shares[index].color}}/>)
                        : 
                        <div></div>
                        }
                    </div>
             
                    {getCategories().length > 0 ? 
                        getCategories().map((category, index) => 
                            <CategoryInfo className="catInfo" category={category} key={index} stockvalue={getTotalValue(category.stockvalues)}/>)
                        :
                        <h2>Inget innehav tillagt ännu</h2>
                }
            </div>
        );
    }

export default Shareholding;