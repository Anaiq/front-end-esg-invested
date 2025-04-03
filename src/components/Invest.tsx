import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header'; 
import Footer from './Footer';
import { ExchangeStock } from '../models/exchangeStockModel';
import ExchangeStocks from './ExchangeStocks';
import BuyForm from './buyForm';
import SellForm from './sellForm';
import { Investor } from '../models/investorModel';


interface IInvestProps {
    exchangeStocks: ExchangeStock[]
    handleBuyStockSubmit:any
    handleSellStockSubmit:any
    investor:Investor
}

const Invest: React.FunctionComponent<IInvestProps> = ({investor,exchangeStocks, handleSellStockSubmit, handleBuyStockSubmit}) => {
    return (
        <div className='container'>
            {/* <div className="row mb-5">
                <div className="col">
                    <header>
                        <Header/>
                    </header>
                </div>  
            </div> */}

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>

            <div className="row mb-5"><h2> ESG Stock Exchange:</h2></div>
            
            <div className="row border border-warning shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="col">
                    <BuyForm investor={investor} handleBuyStockSubmit={handleBuyStockSubmit} /> 
                </div>
                {/* <div className="col-2"></div> */}
                <div className="col">
                    <SellForm investor={investor} handleSellStockSubmit={handleSellStockSubmit} />
                </div>
            </div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            
            <div className="row">
                <div className="col"></div>
                <div>
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
                    {/* <tbody>
                        {exchangeStocks.map((exchangeStock) => (<ExchangeStocks exchangeStock={exchangeStock} {...exchangeStock}/>))}
                    </tbody> */}
                </Table>
                </div>
                <div className="col"></div>
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5 text-center">
                <footer>
                    <Footer/>
                </footer>
            </div>
            
        </div>
    );
        
};

export default Invest;