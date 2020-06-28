const sql = require('./connection-pool');
const {deCodeIdToken} = require("./app/utility");

const getPortfolio = (req, response) => {
  const userid = deCodeIdToken(req.body.id_token);
  sql.query(`SELECT portfolio.stockvalue, portfolio.stocktype, portfolio.amount, portfolio.stocknumber, portfolio.ownamount, portfolio.votevalue, portfolio.datepurchased, companies.companyname, categories.catname, categories.color FROM public.portfolio JOIN public.companies ON portfolio.companyid=companies.companyid JOIN categories ON companies.catid=categories.catid WHERE userid = '${userid}'`, (error, results) => {
    if (error) {
      console.log(error)
      response.status(500).json({message : "Something went wrong when getting portfolio"}); 
    } 
    else if(results.rows.length < 1) {
      response.status(200).json({}); 
    }
    else {
      response.status(200).json(results.rows);
    } 
  });
};

module.exports = {
    getPortfolio,
  };