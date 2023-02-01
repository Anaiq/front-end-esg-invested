import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/Register'; 
import Login from './components/Login'; 
import Header from './components/Header'; 
import ExchangeLists from './components/ExchangeLists';

// const exchangeStocksList = [
  //     {
  //       exchange_id: 1,
  //       stockSymbol: "AAPL",
  //       companyName: 'Apple Inc.',
  //       currentStockPrice: "141.55",
  //       environmentRating: "BB",
  //       socialRating: "B",
  //       governanceRating: "B"
  //     },
  //     {
  //       exchange_id: 2,
  //       stockSymbol: "MSFT",
  //       companyName: 'Microsoft Corporation',
  //       currentStockPrice: "239.89",
  //       environmentRating: "AA",
  //       socialRating: "BBB",
  //       governanceRating: "BB"
  //     },
  //     {
  //       exchange_id: 3,
  //       stockSymbol: "AMZN",
  //       companyName: 'Amazon.com Inc.',
  //       currentStockPrice: "96.83",
  //       environmentRating: "AA",
  //       socialRating: "BB",
  //       governanceRating: "BBB"
  //     },
  //     {
  //       exchange_id: 4,
  //       stockSymbol: "GOOGL",
  //       companyName: 'Alphabet Inc. Class A',
  //       currentStockPrice: "95.00",
  //       environmentRating: "BB",
  //       socialRating: "BB",
  //       governanceRating: "BB"
  //     },
  //     {
  //       exchange_id: 5,
  //       stockSymbol: "BRK_B",
  //       companyName: 'Berkshire Hathaway Inc. Class B',
  //       currentStockPrice: "311.50",
  //       environmentRating: "B",
  //       socialRating: "B",
  //       governanceRating: "B"
  //     },
  //     {
  //       exchange_id: 6,
  //       stockSymbol: "GOOG",
  //       companyName: 'Alphabet Inc. Class C',
  //       currentStockPrice: "96.54",
  //       environmentRating: "B",
  //       socialRating: "BB",
  //       governanceRating: "BB"
  //     },
  //     {
  //       exchange_id: 7,
  //       stockSymbol: "NVDA",
  //       companyName: 'NVIDIA Corporation',
  //       currentStockPrice: "192.86",
  //       environmentRating: "A",
  //       socialRating: "BB",
  //       governanceRating: "BB"
  //     },
  //     {
  //       exchange_id: 8,
  //       stockSymbol: "XOM",
  //       companyName: 'Exxon Mobile Corporation',
  //       currentStockPrice: "113.93",
  //       environmentRating: "A",
  //       socialRating: "BB",
  //       governanceRating: "BB"
  //     },
  //     {
  //       exchange_id: 9,
  //       stockSymbol: "UNH",
  //       companyName: 'UnitedHealth Group Incorporated',
  //       currentStockPrice: "492.00",
  //       environmentRating: "A",
  //       socialRating: "BB",
  //       governanceRating: "BB"
  //     },
  //     {
  //       exchange_id: 10,
  //       stockSymbol: "JNJ",
  //       companyName: 'Johnson & Johnson',
  //       currentStockPrice: "169.46",
  //       environmentRating: "A",
  //       socialRating: "BB",
  //       governanceRating: "BB"
  //     }      
  //   ];
  const kBaseUrl = "http://127.0.0.1:5000/";

  // convert from API functions goes here:
const convertExchangeFromApi = (apiExchangeStock:any) => {
  const {exchange_id:exchangeId, stock_symbol:stockSymbol, company_name:companyName, current_stock_price:currentStockPrice, 
    environment_rating:environmentRating, social_rating:socialRating, governance_rating:governanceRating} = apiExchangeStock;
  const newExchangeStock = { exchangeId, stockSymbol, companyName, currentStockPrice, environmentRating, socialRating, governanceRating};
  return newExchangeStock;
};
const convertInvestorFromApi = (apiInvestor:any) => {
  const {investor_id:investorId, investor_name:investorName, is_logged_in:isLoggedIn, cash_balance:cashBalance, 
    total_shares_buys:totalSharesBuys, total_shares_sales:totalSharesSales, total_shares_cask_value:totalSharesCashValue,
    total_assets_balance:totalAssetsBalance, current_e_rating:currentERating, current_s_rating:currentSRating,  
    current_g_rating:currentGRating, e_goal:eGoal, s_goal:sGoal, g_goal:gGoal} = apiInvestor;
  const newInvestorStock = {investorId, investorName, isLoggedIn, cashBalance, totalSharesBuys, totalSharesSales,
    totalSharesCashValue, totalAssetsBalance, currentERating, currentSRating, currentGRating,e_goal:eGoal,
    sGoal, gGoal};
  return newInvestorStock;
};
const convertStockFromApi = (apiStock:any) => {
  const {stock_id:stockId, stock_symbol:stockSymbol, environment_rating:environmentRating, social_rating:socialRating, 
    governance_rating:governanceRating} = apiStock;
  const newStock = { stockId, stockSymbol, environmentRating, socialRating, governanceRating};
  return newStock;
};
const convertTransactionFromApi = (apiTransaction:any) => {
  const {transaction_id:transactionId, stock_symbol:stockSymbol, company_name:companyName, current_stock_price:currentStockPrice, 
    number_stock_shares:numberStockShares, transaction_total_value:transactionTotalValue, transaction_type:transactionType, 
    transaction_time:transactionTime,investor_id:investorId, stock_id:stockId} = apiTransaction;
  const newTransactionStock = {transactionId, stockSymbol, companyName, currentStockPrice, numberStockShares, 
    transactionTotalValue, transactionType, transactionTime, investorId, stockId};
  return newTransactionStock;
};
// get all stock on the exchange request
const getAllExchangesApi = () => {
  return axios
    .get(`${kBaseUrl}/exchanges`)
    .then((response) => {
      console.log(response.data);
      // return response.data;
      return response.data.map(convertExchangeFromApi);
    })
    .catch((error) => {
      console.log(error.data);
    });
};
  

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName:any) => {
    setCurrentForm(formName);
  }

  const [exchanges, setExchanges] = useState([]);
  // create a helper function above the useEffect to keep the useEffect small
  const getAllExchanges = () => {
    return getAllExchangesApi()
      .then((exchanges) => {
        setExchanges(exchanges);
        console.log(exchanges);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // then have to modify the useEffect
  useEffect(() => {
    getAllExchanges();
  }, []);

  return (

    <div className="App">
      <header>
        <Header/>
      </header>
      <main className="main">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
        <ExchangeLists exchangeStocks={exchanges}/>
      </main>
      <footer>
        {/* <Footer/> */}
      </footer>
      
    </div>
  );
}

export default App;
