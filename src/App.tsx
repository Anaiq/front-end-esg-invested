import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/Register'; 
import Login from './components/Login'; 
import Logout from './components/Logout';
import PortfolioHome from './components/PortfolioHome';
import About from './components/About';
import ESGGoalSet from './components/ESGGoalSet';
import ExchangeLists from './components/ExchangeLists';
import Transactions from './components/Transactions';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';





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
  const newInvestor = {investorId, investorName, isLoggedIn, cashBalance, totalSharesBuys, totalSharesSales,
    totalSharesCashValue, totalAssetsBalance, currentERating, currentSRating, currentGRating,e_goal:eGoal,
    sGoal, gGoal};
  return newInvestor;
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

// get current investor
const getInvestorApi = () => {
  return axios
    .get(`${kBaseUrl}/investors/29`)
    .then((response) => {
      console.log(response.data);
      // return response.data;
      console.log(response.data.map(convertInvestorFromApi));
      return response.data.map(convertInvestorFromApi);
    })
    .catch((error) => {
      console.log(error.data);
    });
};


// get all stock on the exchange 
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

// get all stocks for specified investor
const getAllTransactionsApi = () => {
  return axios
    .get(`${kBaseUrl}/investors/29/transactions`)
    .then((response) => {
      console.log(response.data);
      // return response.data;
      return response.data.map(convertTransactionFromApi);
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
  const [investor, setInvestor] = useState()
  const [investorLogin, setInvestorLogin] = useState("False");
  const [portfolios, setPortfolios] = useState([]);
  const [exchanges, setExchanges] = useState([]); 
  const [transactions, setTransactions] = useState([]);

  const getInvestor = () => {
    return getInvestorApi()
      .then((investor) => {
        setInvestor(investor);
        console.log(investor);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  useEffect(() => {
    getInvestor();
  }, []);

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
  

  useEffect(() => {
    getAllExchanges();
  }, []);


  const getAllTransactions = () => {
    return getAllTransactionsApi()
      .then((transactions) => {
        setTransactions(transactions);
        console.log(transactions);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  

  useEffect(() => {
    getAllTransactions();
  }, []);

  return ( 
    <div className='App'>
    <main className='main'>
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login />}></Route>
              <Route path='register' element={<Register />}></Route>
              <Route path='portfolio' element={<PortfolioHome  portfolios={portfolios}/>}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='esg-goal-planner' element={<ESGGoalSet />}></Route>
              <Route path='invest' element={<ExchangeLists exchangeStocks={exchanges} />}></Route>
              <Route path='transactions' element={<Transactions transactions={transactions} />}></Route>
              <Route path='/logout' element={<Logout />}></Route>
              <Route path='*' element={<Error />} />
          </Routes>
          <footer><Footer /></footer>
      </BrowserRouter>
    </main>
      
    </div>   
    

    // <div className="App">
    //   <header>
    //     <Header/>
    //   </header>
      
    //   <main className="main">
    //     {
    //       currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    //     } 
        
    //     {/* <PortfolioLists portfolioStocks={portfolios} investor={investor}/> */}
        
    //   </main>
    //   <footer>
    //     <Footer/>
    //   </footer>
    // </div>
  );
}

export default App;