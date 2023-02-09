import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Investor } from './models/investorModel';
import { InvestorApi } from './models/investorApiModel';
import { StockApi } from './models/stockApiModel';
import { ExchangeStockApi } from './models/exchangeStockApiModel';
import { TransactionApi } from './models/transactionApiModel'
import Register from './components/Register'; 
import Login from './components/Login'; 
import Logout from './components/Logout';
import PortfolioHome from './components/PortfolioHome';
import About from './components/About';
import ESGGoalSet from './components/ESGGoalSet';
import Invest from './components/Invest';
import Transactions from './components/Transactions';
import Error from './components/Error';
import { PortfolioStock } from './models/portfolioStockModel';
import { Transaction } from './models/transactionModel';
import { Stock } from './models/stockModel';


  const kBaseUrl = 'http://localhost:5000';

  // convert from API functions goes here:
const convertExchangeFromApi = (apiExchangeStock:ExchangeStockApi) => {
  const {exchange_id:exchangeId, stock_symbol:stockSymbol, company_name:companyName, current_stock_price:currentStockPrice, 
    environment_rating:environmentRating, social_rating:socialRating, governance_rating:governanceRating} = apiExchangeStock;
  const newExchangeStock = { exchangeId, stockSymbol, companyName, currentStockPrice, environmentRating, socialRating, governanceRating};
  return newExchangeStock;
};

const convertInvestorFromApi = (apiInvestor:InvestorApi) => {
  const {investor_id:investorId, investor_name:investorName, is_logged_in:isLoggedIn, cash_balance:cashBalance, 
    total_shares_buys:totalSharesBuys, total_shares_sales:totalSharesSales, total_shares_cash_value:totalSharesCashValue,
    total_assets_balance:totalAssetsBalance, current_e_rating:currentERating, current_s_rating:currentSRating,  
    current_g_rating:currentGRating, e_goal:eGoal, s_goal:sGoal, g_goal:gGoal, transactions} = apiInvestor;
  const newInvestor = {investorId, investorName, isLoggedIn, cashBalance, totalSharesBuys, totalSharesSales,
    totalSharesCashValue, totalAssetsBalance, currentERating, currentSRating, currentGRating,eGoal,
    sGoal, gGoal, transactions:transactions.map(convertTransactionFromApi)};
  return newInvestor
};

const convertStockFromApi = (apiStock:StockApi) => {
  const {stock_id:stockId, stock_symbol:stockSymbol, environment_rating:environmentRating, social_rating:socialRating, 
    governance_rating:governanceRating} = apiStock;
  const newStock = { stockId, stockSymbol, environmentRating, socialRating, governanceRating};
  return newStock;
};

const convertTransactionFromApi = (apiTransaction:TransactionApi) => {
  const {transaction_id:transactionId, stock_symbol:stockSymbol, company_name:companyName, current_stock_price:currentStockPrice, 
    number_stock_shares:numberStockShares, transaction_total_value:transactionTotalValue, transaction_type:transactionType, 
    transaction_time:transactionTime,investor_id:investorId, stock_id:stockId, environment_rating:environmentRating, social_rating:socialRating, 
    governance_rating:governanceRating} = apiTransaction;
  const newTransactionStock = {transactionId, stockSymbol, companyName, currentStockPrice, numberStockShares, 
    transactionTotalValue, transactionType, transactionTime, investorId, stockId, environmentRating, socialRating, governanceRating};
  return newTransactionStock;
};

// API CALLS HERE
// register a new investor
const registerInvestorApi = (registrationCredentials:{
  username: string
  password: string
  }) => {
  console.log('registrationCredentials: ', registrationCredentials);
  const investorName = registrationCredentials.username;
  const requestBody = {
      investor_name: investorName, 
      password: 'N/A',
      is_logged_in: false,
      cash_balance: 0,
      total_shares_buys: 0,
      total_shares_sales: 0,
      total_shares_cash_value: 0,
      total_assets_balance: 0,
      current_e_rating: '',
      current_s_rating: '',
      current_g_rating: '',
      e_goal: '',
      s_goal: '',
      g_goal: '', 
      transactions: []
  }
  console.log('registerInvestorApi requestBody:' , requestBody)
  return axios
  .post(`${kBaseUrl}/investors`, requestBody)
  .then((response) => {
    console.log('registerInvestorApi response.data: ', response.data)
    console.log(convertInvestorFromApi(response.data));
    return convertInvestorFromApi(response.data);
  })
  .catch((error) => {
    console.log(error.data);
  });
}

// get current investor  
const loginInvestorApi = (loginCredentials:{
  username: string
  password: string
  }) => {
  console.log('loginCredentials: ', loginCredentials);
  const investorName = loginCredentials.username;
  const requestBody = {
    investor_name:investorName, 
    password: 'N/A',
    is_logged_in: false,
    cash_balance: 0,
    total_shares_buys: 0,
    total_shares_sales: 0,
    total_shares_cash_value: 0,
    total_assets_balance: 0,
    current_e_rating: '',
    current_s_rating: '',
    current_g_rating: '',
    e_goal: '',
    s_goal: '',
    g_goal: '',
    transactions: []
  }

  console.log('loginInvestorApi requestBody:', requestBody);
  return axios
  .post(`${kBaseUrl}/login`, requestBody)
  .then((response) => {
    console.log('loginInvestorApi: ' , response.data);
    console.log('converted LoginInvestorApi: ',convertInvestorFromApi(response.data));
    return convertInvestorFromApi(response.data);
})
.catch((error) => {
  console.log(error.data);
});
};


// add an investor buy transaction

const buyStockApi = (buyData:{
  stockSymbol: string,
  currentStockPrice:number,
  numberStockSharesBuy:string,
  transactionType: string,
  buyerId: number,
}) => {
console.log('buyData: ', buyData)
const buyRequestBody = {
  stock_symbol: buyData.stockSymbol,
  current_stock_price:buyData.currentStockPrice,
  number_stock_shares:buyData.numberStockSharesBuy,
  transaction_type: buyData.transactionType,
  investor_id: buyData.buyerId}
console.log('buyStock requestBody: ', buyRequestBody);

return axios
.post(`${kBaseUrl}/investors/${buyData.buyerId}/buy`, buyRequestBody)
.then((response) => {
  console.log('buyStockApi investor: ', response.data);
  console.log('converted buyStockApi Investor: ', convertInvestorFromApi(response.data));
  return convertInvestorFromApi(response.data);
})
.catch((error) => {
  console.log(error.data);
})
};

// add an investor sell transaction


//add money to investor cash balance
const addMoneyApi = (cashData:{
  id: number,
  cashDeposit: number
  }) => {
console.log('cashData: ', cashData);
const moneyRequestBody = {id: cashData.id, cash: cashData.cashDeposit}
console.log('deposited money amount: ', moneyRequestBody.cash)
console.log('addMoneyApi requestBody: ', moneyRequestBody);

return axios
.patch(`${kBaseUrl}/investors/${cashData.id}/add_money`, moneyRequestBody)
.then((response) => {
  console.log('loginInvestorApi: ' , response.data);
  console.log('converted LoginInvestorApi: ',convertInvestorFromApi(response.data));
  return convertInvestorFromApi(response.data);
})
.catch((error) => {
  console.log(error.data);
})

};


// get all stock on the exchange 
const getAllExchangesApi = () => {
  return axios
    .get(`${kBaseUrl}/exchanges`)
    .then((response) => {
      console.log(response.data);
      // return response.data;
      console.log(response.data.map(convertExchangeFromApi));
      return response.data.map(convertExchangeFromApi);
    })
    .catch((error) => {
      console.log(error.data);
    });
};


// get all stocks ratings
const getAllStockRatingsApi = () => {
  return axios
  .get(`${kBaseUrl}/stocks`)
    .then((response) => {
      console.log(response.data);
      // return response.data;
      console.log(response.data.map(convertStockFromApi));
      return response.data.map(convertStockFromApi);
    })
    .catch((error) => {
      console.log(error.data);
    });
};



// get all transactions for specified investor
const getAllTransactionsApi = (id:number) => {
  return axios
    .get(`${kBaseUrl}/investors/${id}/transactions`)
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
  const [investorData, setInvestorData] = useState<Investor>(() =>{
    // investorId:0, 
    // investorName: '', 
    // isLoggedIn: false, 
    // cashBalance: 0, 
    // totalSharesBuys: 0,
    // totalSharesSales: 0,
    // totalSharesCashValue: 0, 
    // totalAssetsBalance: 0, 
    // currentERating: '',
    // currentSRating: '',
    // currentGRating: '',
    // eGoal: '', 
    // sGoal: '',
    // gGoal: '',
    // transactions: []
    const savedInvestor = localStorage.getItem("investorData");
    const parsedItem= JSON.parse(savedInvestor!);
    return parsedItem ||  "";
  });
  useEffect(()=> {
    localStorage.setItem('investorData', JSON.stringify(investorData));
  },[investorData])

  const [portfolios, setPortfolios] = useState<PortfolioStock[]>([]);
  const [exchanges, setExchanges] = useState([]); 
  useEffect(()=> {
    localStorage.setItem('exchanges', JSON.stringify(exchanges));
  },[exchanges])

  const [stockRatings, setStockRatings] = useState<Stock[]>([])
  useEffect(()=> {
    localStorage.setItem('stockRatings', JSON.stringify(stockRatings));
  },[stockRatings])
  const [transactions, setTransactions] = useState<Transaction[]>([]);



  const handleRegisterSubmit = (data:{
    username: string
    password: string
    })=> {
    registerInvestorApi(data)
    .then((registeredInvestor) => {
      console.log('new registered Investor: ', registeredInvestor)
      setInvestorData(registeredInvestor!);
    })
    .catch(error => {
      console.log(error);
    })
  }
  

  const handleLoginSubmit = (data:{
    username: string,
    password: string
    }) => {
    loginInvestorApi(data)
    .then(loggedInvestor => { 
      console.log('loggedInInvestor: ', loggedInvestor)
      setInvestorData(loggedInvestor!); 
      getAllTransactions(loggedInvestor!)
    })
    .catch(error => {
      console.log(error);
    })
  };


  const  handleAddMoneySubmit = (cashData:{
    id: number,
    cashDeposit: number
    }) => {
    addMoneyApi(cashData)
    .then(investorWithAddedCash => {
      console.log('investor that added cash:', investorWithAddedCash)
      setInvestorData(investorWithAddedCash!);
      getAllTransactions(investorWithAddedCash!)
      if (investorWithAddedCash) {
        console.log('investor with added cash:', investorWithAddedCash.investorName)
      }
    })
    .catch(error => {
      console.log(error);
    });
  };

  const handleBuyStockSubmit = (buyData:{
    stockSymbol: string,
    currentStockPrice:number,
    numberStockSharesBuy:string,
    transactionType: string,
    buyerId: number,
  }) => {
    buyStockApi(buyData)
    .then(InvestorOfStockPurchase => {
      console.log('InvestorOfStockPurchase: ', InvestorOfStockPurchase)
      setInvestorData(InvestorOfStockPurchase!);
      getAllTransactions(InvestorOfStockPurchase!);
      if (InvestorOfStockPurchase) {
        console.log('investor that bought stock: ', InvestorOfStockPurchase.investorName)
      }
    })
    .catch(error => {
      console.log(error);
    });
  };


const handleSellStockSubmit = () => {
  console.log('stock sold!!')
}


  const getAllExchanges = () => {
    return getAllExchangesApi()
      .then((exchanges) => {
        console.log(exchanges);
        setExchanges(exchanges);
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  useEffect(() => {
    getAllExchanges();
  }, []); //This only needs to be done on initial render, values will NOT change


  const getAllStockRatings = () => {
    return getAllStockRatingsApi()
      .then((stockRatings) => {
        console.log(stockRatings);
        setStockRatings(stockRatings);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  useEffect(() => {
    getAllStockRatings();
  }, []); //This only needs to be done on initial render, values will NOT change



  const getAllTransactions = (investorData:Investor) => {
    return getAllTransactionsApi(investorData.investorId)
      .then((transactions) => {
        setTransactions(transactions);
        setPortfolios(transactions) 
        console.log(transactions);
        console.log(portfolios)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  

  console.log('investorData: ', investorData)

  return ( 
    <div className='App'>
      <main className='main'>
        <BrowserRouter>
          <Routes>          
            <Route path='/' element={<Login handleLoginSubmit={handleLoginSubmit}  />}></Route> 
            <Route path='register' element={<Register handleRegisterSubmit={handleRegisterSubmit}  />}></Route>
            <Route path='portfolio' element={<PortfolioHome investor={investorData} stockRatings={stockRatings} portfolios={portfolios}
              handleAddMoneySubmit={handleAddMoneySubmit}  />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='esg-goal-planner' element={<ESGGoalSet investor={investorData}/>}></Route>
            <Route path='invest' element={<Invest investor={investorData} exchangeStocks={exchanges} handleBuyStockSubmit={handleBuyStockSubmit} handleSellStockSubmit={handleBuyStockSubmit} />}></Route>
            <Route path='transactions' element={<Transactions investor={investorData} transactions={transactions} />}></Route>
            <Route path='/logout' element={<Logout investor={investorData}/>}></Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>   
  );
}

export default App;