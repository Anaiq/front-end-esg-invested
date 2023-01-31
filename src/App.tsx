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
  //       environmentScore: "BB",
  //       socialScore: "B",
  //       governanceScore: "B"
  //     },
  //     {
  //       exchange_id: 2,
  //       stockSymbol: "MSFT",
  //       companyName: 'Microsoft Corporation',
  //       currentStockPrice: "239.89",
  //       environmentScore: "AA",
  //       socialScore: "BBB",
  //       governanceScore: "BB"
  //     },
  //     {
  //       exchange_id: 3,
  //       stockSymbol: "AMZN",
  //       companyName: 'Amazon.com Inc.',
  //       currentStockPrice: "96.83",
  //       environmentScore: "AA",
  //       socialScore: "BB",
  //       governanceScore: "BBB"
  //     },
  //     {
  //       exchange_id: 4,
  //       stockSymbol: "GOOGL",
  //       companyName: 'Alphabet Inc. Class A',
  //       currentStockPrice: "95.00",
  //       environmentScore: "BB",
  //       socialScore: "BB",
  //       governanceScore: "BB"
  //     },
  //     {
  //       exchange_id: 5,
  //       stockSymbol: "BRK_B",
  //       companyName: 'Berkshire Hathaway Inc. Class B',
  //       currentStockPrice: "311.50",
  //       environmentScore: "B",
  //       socialScore: "B",
  //       governanceScore: "B"
  //     },
  //     {
  //       exchange_id: 6,
  //       stockSymbol: "GOOG",
  //       companyName: 'Alphabet Inc. Class C',
  //       currentStockPrice: "96.54",
  //       environmentScore: "B",
  //       socialScore: "BB",
  //       governanceScore: "BB"
  //     },
  //     {
  //       exchange_id: 7,
  //       stockSymbol: "NVDA",
  //       companyName: 'NVIDIA Corporation',
  //       currentStockPrice: "192.86",
  //       environmentScore: "A",
  //       socialScore: "BB",
  //       governanceScore: "BB"
  //     },
  //     {
  //       exchange_id: 8,
  //       stockSymbol: "XOM",
  //       companyName: 'Exxon Mobile Corporation',
  //       currentStockPrice: "113.93",
  //       environmentScore: "A",
  //       socialScore: "BB",
  //       governanceScore: "BB"
  //     },
  //     {
  //       exchange_id: 9,
  //       stockSymbol: "UNH",
  //       companyName: 'UnitedHealth Group Incorporated',
  //       currentStockPrice: "492.00",
  //       environmentScore: "A",
  //       socialScore: "BB",
  //       governanceScore: "BB"
  //     },
  //     {
  //       exchange_id: 10,
  //       stockSymbol: "JNJ",
  //       companyName: 'Johnson & Johnson',
  //       currentStockPrice: "169.46",
  //       environmentScore: "A",
  //       socialScore: "BB",
  //       governanceScore: "BB"
  //     }      
  //   ];
  const kBaseUrl = "http://127.0.0.1:5000/";

  // convert from API function goes here:
const convertFromApi = (apiExchangeStock:any) => {
  const { exchange_id:exchangeId, stock_symbol:stockSymbol, company_name:companyName, current_stock_price:currentStockPrice, 
    environment_score:environmentScore, social_score:socialScore, governance_score:governanceScore} = apiExchangeStock;
  const newExchangeStock = { exchangeId, stockSymbol, companyName, currentStockPrice, environmentScore, socialScore, governanceScore};
  return newExchangeStock;
};
// get all stock on the exchange request
const getAllExchangesApi = () => {
  return axios
    .get(`${kBaseUrl}/exchanges`)
    .then((response) => {
      console.log(response.data);
      // return response.data;
      return response.data.map(convertFromApi);
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
        <ExchangeLists exchanges={exchanges}/>
      </main>
      <footer>
        {/* <Footer/> */}
      </footer>
      
    </div>
  );
}

export default App;
