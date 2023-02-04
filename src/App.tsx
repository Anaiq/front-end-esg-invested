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
import { Investor } from './models/investorModel';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Error from './components/Error';


  const kBaseUrl = "http://127.0.0.1:5000/";
  const kDefaultFormState = {
    username: '',
    password: ''
    };

  // convert from API functions goes here:
const convertExchangeFromApi = (apiExchangeStock:any) => {
  const {exchange_id:exchangeId, stock_symbol:stockSymbol, company_name:companyName, current_stock_price:currentStockPrice, 
    environment_rating:environmentRating, social_rating:socialRating, governance_rating:governanceRating} = apiExchangeStock;
  const newExchangeStock = { exchangeId, stockSymbol, companyName, currentStockPrice, environmentRating, socialRating, governanceRating};
  return newExchangeStock;
};

const convertInvestorFromApi = (apiInvestor:any) => {
  const {investor_id:investorId, investor_name:investorName, is_logged_in:isLoggedIn, cash_balance:cashBalance, 
    total_shares_buys:totalSharesBuys, total_shares_sales:totalSharesSales, total_shares_cash_value:totalSharesCashValue,
    total_assets_balance:totalAssetsBalance, current_e_rating:currentERating, current_s_rating:currentSRating,  
    current_g_rating:currentGRating, e_goal:eGoal, s_goal:sGoal, g_goal:gGoal, transactions} = apiInvestor;
  const newInvestor = {investorId, investorName, isLoggedIn, cashBalance, totalSharesBuys, totalSharesSales,
    totalSharesCashValue, totalAssetsBalance, currentERating, currentSRating, currentGRating,eGoal,
    sGoal, gGoal, transactions};
  return newInvestor
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

// get current investor  **needs return type here!!
const getInvestorApi = () => {
  return axios
    .get(`${kBaseUrl}/investors/29`)
    .then((response) => {
      // console.log(response.data);
      // return response.data;
      // console.log(convertInvestorFromApi(response.data));
      return (convertInvestorFromApi(response.data));
      })
    .catch((error) => {
      console.log(error.data);
    });
};

const registerInvestorApi = (investorData:{}) => {
  const currentInvestorData = {...investorData, 
      password: "N/A",
      is_logged_in: false,
      cash_balance: 0,
      total_shares_buys: 0,
      total_shares_sales: 0,
      total_shares_cash_value: 0,
      total_assets_balance: 0,
      current_e_rating: "",
      current_s_rating: "",
      current_g_rating: "",
      e_goal: "",
      s_goal: "",
      g_goal: ""
  }
  return axios
  .post(`${kBaseUrl}/investors`, currentInvestorData)
  .then(response => {
    return convertInvestorFromApi(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

// get all stock on the exchange 
const getAllExchangesApi = () => {
  return axios
    .get(`${kBaseUrl}/exchanges`)
    .then((response) => {
      // console.log(response.data);
      // return response.data;
      // console.log(response.data.map(convertExchangeFromApi));
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
      // console.log(response.data);
      // console.log(response.data.map(convertTransactionFromApi));
      return response.data.map(convertTransactionFromApi);
    })
    .catch((error) => {
      console.log(error.data);
    });
};

function App() {
  const [currentForm, setCurrentForm] = useState('/login');
  
  const [loggedIninvestor, setloggInInvestor] = useState({
    investorId:0, 
    investorName: '', 
    isLoggedIn: false, 
    cashBalance: 0, 
    totalSharesBuys: 0,
    totalSharesSales: 0,
    totalSharesCashValue: 0, 
    totalAssetsBalance: 0, 
    currentERating: '',
    currentSRating: '',
    currentGRating: '',
    eGoal: '', 
    sGoal: '',
    gGoal: ''
  });

  const [regInvestorData, setRegInvestorData] = useState({
    investorId:0, 
    investorName: '', 
    isLoggedIn: false, 
    cashBalance: 0, 
    totalSharesBuys: 0,
    totalSharesSales: 0,
    totalSharesCashValue: 0, 
    totalAssetsBalance: 0, 
    currentERating: '',
    currentSRating: '',
    currentGRating: '',
    eGoal: '', 
    sGoal: '',
    gGoal: ''
  });

  const [investorLoginStatus, setInvestorLoginStatus] = useState(false)
  const [portfolios, setPortfolios] = useState([]);
  const [exchanges, setExchanges] = useState([]); 
  const [stocks, setStocks] = useState([])
  const [transactions, setTransactions] = useState([]);

  const toggleForm = (formName:any) => {
      setCurrentForm(formName);
  }

  const onFormSwitch = (event:any): void => {
    console.log('switched form');
    toggleForm(currentForm);
  }

  const getInvestor = () => {
    return getInvestorApi()
      .then((investor) => {
        // console.log(investor);
        // setInvestor(investor);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  useEffect(() => {
    getInvestor();
  }, []);

  const handleRegisterSubmit = (data:{}) => {
    console.log('data:', data)
    // call api, update the registered with the data that comes back
    registerInvestorApi(data)
    .then(newInvestor => {
      setRegInvestorData(regInvestorData)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleLoginSubmit = (data:{}) => {
    console.log('data:', data)
    // call api, update the investorData with the data that comes back
  }

  const getAllExchanges = () => {
    return getAllExchangesApi()
      .then((exchanges) => {
        // console.log(exchanges);
        setExchanges(exchanges);
        
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
        setPortfolios(transactions)
        // console.log(transactions);
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
            {/* {
              currentForm === 'login'? <Route path='/login' element={<Login onFormSwitch={toggleForm} handleLoginSubmit={handleLoginSubmit} />}></Route> : 
              <Route path='register' element={<Register handleLoginSubmit={handleLoginSubmit} onFormSwitch={toggleForm}/>}></Route>
            }; */}
          
            <Route path='/login' element={<Login onFormSwitch={toggleForm} handleLoginSubmit={handleLoginSubmit} />}></Route> 
            <Route path='register' element={<Register handleRegisterSubmit={handleRegisterSubmit} onFormSwitch={toggleForm}/>}></Route>
            <Route path='portfolio' element={<PortfolioHome investor={loggedIninvestor} portfolios={portfolios}/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='esg-goal-planner' element={<ESGGoalSet />}></Route>
            <Route path='invest' element={<ExchangeLists exchangeStocks={exchanges} />}></Route>
            <Route path='transactions' element={<Transactions transactions={transactions} />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </main>
        
    </div>   
  );
}

export default App;