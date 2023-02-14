import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootswatch/dist/flatly/bootstrap.min.css'
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


// const kBaseUrl = 'https://esg-invested-back.herokuapp.com';
const kBaseUrl = 'http://localhost:5000';

  // convert from API functions goes here:
const convertExchangeFromApi = (apiExchangeStock:ExchangeStockApi) => {
  const {exchange_id:exchangeId, stock_symbol:stockSymbol, company_name:companyName, current_stock_price:currentStockPrice, 
    environment_rating:environmentRating, social_rating:socialRating, governance_rating:governanceRating} = apiExchangeStock;
  const newExchangeStock = { exchangeId, stockSymbol, companyName, currentStockPrice, environmentRating, socialRating, governanceRating};
  return newExchangeStock;
};

const convertInvestorFromApi = (apiInvestor:InvestorApi) => {
  const {investor_id:investorId, investor_name:investorName, cash_balance:cashBalance, 
    total_shares_buys:totalSharesBuys, total_shares_sales:totalSharesSales, total_shares_cash_value:totalSharesCashValue,
    total_assets_balance:totalAssetsBalance, current_e_rating:currentERating, current_s_rating:currentSRating,  
    current_g_rating:currentGRating, e_goal:eGoal, s_goal:sGoal, g_goal:gGoal, transactions} = apiInvestor;
  const newInvestor = {investorId, investorName, cashBalance, totalSharesBuys, totalSharesSales,
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
  number_stock_shares:parseInt(buyData.numberStockSharesBuy, 10),
  transaction_type: buyData.transactionType,
  investor_id: buyData.buyerId
};
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
const sellStockApi = (sellData:{
  stockSymbol: string,
  currentStockPrice:number,
  numberStockSharesSell:string,
  transactionType: string,
  sellerId: number,
}) => {
console.log('sellData: ', sellData)
const sellRequestBody = {
  stock_symbol: sellData.stockSymbol,
  current_stock_price:sellData.currentStockPrice,
  number_stock_shares:parseInt(sellData.numberStockSharesSell, 10),
  transaction_type: sellData.transactionType,
  investor_id: sellData.sellerId
};
console.log('sellStock requestBody: ', sellRequestBody);

return axios
.post(`${kBaseUrl}/investors/${sellData.sellerId}/sell`, sellRequestBody)
.then((response) => {
  console.log('sellStockApi investor: ', response.data);
  console.log('converted sellStockApi Investor: ', convertInvestorFromApi(response.data));
  return convertInvestorFromApi(response.data);
})
.catch((error) => {
  console.log(error.data);
})
};

//add money to investor cash balance
const addMoneyApi = (cashData:{
  id: number,
  cashDeposit: string
  }) => {
console.log('cashData: ', cashData);
const moneyRequestBody = {id: cashData.id, cash: parseInt(cashData.cashDeposit, 10) * 100}
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

  const [goalChartData, setGoalChartData] = useState({
    AAA:15,
    AA:15,
    A:15,
    BBB:15,
    BB:10,
    B:10,
    CCC:10,
    CC:10,
  });


  const [portfolioChartData, setPortfolioChartData] = useState({
    AAA:1,
    AA:1,
    A:1,
    BBB:1,
    BB:1,
    B:1,
    CCC:1,
    CC:1,
  })

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
    cashDeposit: string
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
    .then(investorOfStockPurchase => {
      console.log('investorOfStockPurchase: ', investorOfStockPurchase)
      setInvestorData(investorOfStockPurchase!);
      getAllTransactions(investorOfStockPurchase!);
      if (investorOfStockPurchase) {
        console.log('Investor that bought stock: ', investorOfStockPurchase.investorName)
      }
    })
    .catch(error => {
      console.log(error);
    });
  };


  const handleSellStockSubmit = (sellData:{
      stockSymbol: string,
      currentStockPrice:number,
      numberStockSharesSell:string,
      transactionType: string,
      sellerId: number,
  }) => {
    sellStockApi(sellData)
    .then(investorOfStockSale => {
      console.log('investorOfStockSale: ', investorOfStockSale)
      setInvestorData(investorOfStockSale!);
      getAllTransactions(investorOfStockSale!);
      if (investorOfStockSale) {
        console.log('Investor that sold stock: ', investorOfStockSale.investorName)
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  const handleGoalChangeSubmit = (goalData: {
    AAA:number,
    AA:number,
    A:number,
    BBB:number,
    BB:number,
    B:number,
    CCC:number,
    CC:number,
  }) => {
    setGoalChartData(goalData);
  };

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
        setPortfolioChartData(getPortfolioChartData(transactions))
        console.log(transactions);
        console.log(portfolios)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getPortfolioChartData = (portfolios: PortfolioStock[]) => {
    // for each portfolio stockRatings, grab the number of AAA toCC
    let AAACount = 0;
    let AACount = 0;
    let ACount = 0;
    let BBBCount = 0;
    let BBCount = 0;
    let BCount = 0;
    let CCCCount = 0;
    let CCCount = 0;

    let transactionCount = 0;

    portfolios.forEach(portfolio => {
      if (portfolio.environmentRating === 'AAA'|| portfolio.socialRating === 'AAA'|| portfolio.governanceRating === 'AAA') {
        AAACount += 1;
        console.log('AAACount:', AAACount);
      } else if (portfolio.environmentRating === 'AA'|| portfolio.socialRating === 'AA'|| portfolio.governanceRating === 'AA') {
        AACount +=1;
        console.log('AACount:', AACount);
      } else if (portfolio.environmentRating === 'A'|| portfolio.socialRating === 'A' || portfolio.governanceRating === 'A') {
        ACount +=1;
        console.log('ACount:', ACount);
      } else if (portfolio.environmentRating === 'BBB'|| portfolio.socialRating === 'BBB'|| portfolio.governanceRating === 'BBB') {
        BBBCount +=1;
        console.log('BBBCount:', BBBCount);
      } else if (portfolio.environmentRating === 'BB'|| portfolio.socialRating === 'BB'|| portfolio.governanceRating === 'BB') {
        BBCount +=1;
        console.log('BBCount:', BBCount);
      } else if (portfolio.environmentRating === 'B'|| portfolio.socialRating === 'B'|| portfolio.governanceRating === 'B') {
        BCount +=1;
        console.log('BCount:', BCount);
      } else if (portfolio.environmentRating === 'CCC' || portfolio.socialRating === 'CCC'|| portfolio.governanceRating === 'CCC') {
        CCCCount +=1;
        console.log('CCCCount:', CCCCount);
      } else if (portfolio.environmentRating === 'CC'|| portfolio.socialRating === 'CC'|| portfolio.governanceRating === 'CC') {
        CCCount +=1;
        console.log('CCCount:', CCCount);
      }
  })
  
  portfolios.forEach(portfolio => {
    transactionCount +=1
  })
  console.log('transaction count:', transactionCount)

  const totalCount = transactionCount * 3
  console.log('total ratings:', totalCount)
  
  const tempChartData = {
  // AAA: Math.round(AAACount / totalCount) * 100,
  AAA:(AAACount / totalCount) * 100,
  AA: (AACount/ totalCount) * 100,
  A: (ACount/ totalCount) * 100,
  BBB: (BBBCount/ totalCount) * 100,
  BB: (BBCount/ totalCount) * 100,
  B: (BCount/ totalCount) * 100,
  CCC: (CCCCount/ totalCount) * 100,
  CC: (CCCount/ totalCount) * 100
  };

  console.log('tempChartData: ', tempChartData)
  return tempChartData
  }


  console.log('investorData: ', investorData)

  return ( 
    <div className="container">
      <BrowserRouter>
        <Routes>          
          <Route path='/' element={<Login handleLoginSubmit={handleLoginSubmit}  />}></Route> 
          <Route path='register' element={<Register handleRegisterSubmit={handleRegisterSubmit}  />}></Route>
          <Route path='portfolio' element={<PortfolioHome portfolioChartData={portfolioChartData} investor={investorData} goalChartData={goalChartData} stockRatings={stockRatings} portfolios={portfolios}
            handleAddMoneySubmit={handleAddMoneySubmit}  />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='esg-goal-planner' element={<ESGGoalSet investor={investorData} goalChartData={goalChartData} handleGoalChangeSubmit={handleGoalChangeSubmit}/>}></Route>
          <Route path='invest' element={<Invest investor={investorData} exchangeStocks={exchanges} handleBuyStockSubmit={handleBuyStockSubmit} handleSellStockSubmit={handleSellStockSubmit} />}></Route>
          <Route path='transactions' element={<Transactions investor={investorData} transactions={transactions} />}></Route>
          <Route path='/logout' element={<Logout investor={investorData}/>}></Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;