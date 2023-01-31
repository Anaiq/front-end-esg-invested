import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/Register'; 
import Login from './components/Login'; 
import Header from './components/Header'; 
import ExchangeLists from './components/ExchangeLists';


function App() {
  const kBaseUrl = "http://127.0.0.1:5000/";
  const exchangeStocksList = [
      {
        exchange_id: 1,
        stockSymbol: "AAPL",
        companyName: 'Apple Inc.',
        currentStockPrice: "141.55",
        environmentScore: "BB",
        socialScore: "B",
        governanceScore: "B"
      },
      {
        exchange_id: 2,
        stockSymbol: "MSFT",
        companyName: 'Microsoft Corporation',
        currentStockPrice: "239.89",
        environmentScore: "AA",
        socialScore: "BBB",
        governanceScore: "BB"
      },
      {
        exchange_id: 3,
        stockSymbol: "AMZN",
        companyName: 'Amazon.com Inc.',
        currentStockPrice: "96.83",
        environmentScore: "AA",
        socialScore: "BB",
        governanceScore: "BBB"
      },
      {
        exchange_id: 4,
        stockSymbol: "GOOGL",
        companyName: 'Alphabet Inc. Class A',
        currentStockPrice: "95.00",
        environmentScore: "BB",
        socialScore: "BB",
        governanceScore: "BB"
      },
      {
        exchange_id: 5,
        stockSymbol: "BRK_B",
        companyName: 'Berkshire Hathaway Inc. Class B',
        currentStockPrice: "311.50",
        environmentScore: "B",
        socialScore: "B",
        governanceScore: "B"
      },
      {
        exchange_id: 6,
        stockSymbol: "GOOG",
        companyName: 'Alphabet Inc. Class C',
        currentStockPrice: "96.54",
        environmentScore: "B",
        socialScore: "BB",
        governanceScore: "BB"
      },
      {
        exchange_id: 7,
        stockSymbol: "NVDA",
        companyName: 'NVIDIA Corporation',
        currentStockPrice: "192.86",
        environmentScore: "A",
        socialScore: "BB",
        governanceScore: "BB"
      },
      {
        exchange_id: 8,
        stockSymbol: "XOM",
        companyName: 'Exxon Mobile Corporation',
        currentStockPrice: "113.93",
        environmentScore: "A",
        socialScore: "BB",
        governanceScore: "BB"
      },
      {
        exchange_id: 9,
        stockSymbol: "UNH",
        companyName: 'UnitedHealth Group Incorporated',
        currentStockPrice: "492.00",
        environmentScore: "A",
        socialScore: "BB",
        governanceScore: "BB"
      },
      {
        exchange_id: 10,
        stockSymbol: "JNJ",
        companyName: 'Johnson & Johnson',
        currentStockPrice: "169.46",
        environmentScore: "A",
        socialScore: "BB",
        governanceScore: "BB"
      }      
    ];

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName:any) => {
    setCurrentForm(formName);
  }

  const [exchanges, setExchangeStocksList] = useState(exchangeStocksList)

  return (

    <div className="App">
      <header>
        <Header/>
      </header>
      <main className="main">
        {/* {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        } */}
        <ExchangeLists exchanges={exchanges}/>
      </main>
      <footer>
        {/* <Footer/> */}
      </footer>
      
    </div>
  );
}

export default App;
