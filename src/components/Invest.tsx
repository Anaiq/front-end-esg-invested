import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header'; 
import Footer from './Footer';
import { ExchangeStock } from '../models/exchangeStockModel';
import ExchangeStocks from './ExchangeStocks';
import BuyForm from './buyForm';
import SellForm from './sellForm';
import { Investor } from '../models/investorModel';
import { InvestorApi } from '../models/investorApiModel';


interface IInvestProps {
    exchangeStocks: ExchangeStock[]
    handleBuyStockSubmit:any
    handleSellStockSubmit:any
    investor:Investor
}

const Invest: React.FunctionComponent<IInvestProps> = ({investor,exchangeStocks, handleSellStockSubmit, handleBuyStockSubmit}) => {
    return (
        <div className='container'>
            <header>
                <Header/>
            </header>
            <h2> ESG Stock Exchange</h2>
            <div className='mb-2'>
                <BuyForm investor={investor} handleBuyStockSubmit={handleBuyStockSubmit} /> 
            </div>
            <div className='mb-2'>
                <SellForm investor={investor} handleSellStockSubmit={handleBuyStockSubmit}  />
            </div>
            <div className="mb-4">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Stock Symbol</th>
                            <th>Company Name</th>
                            <th>Current Stock Price</th>
                            <th>Environment Rating</th>
                            <th>Social Rating</th>
                            <th>Governance Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exchangeStocks.map((exchangeStock) => (<ExchangeStocks exchangeStock={exchangeStock} {...exchangeStock}/>))}
                    </tbody>
                </Table>
            </div>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
        
};

export default Invest;