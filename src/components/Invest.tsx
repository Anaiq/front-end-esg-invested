import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header'; 
import Footer from './Footer';
import { ExchangeStock } from '../models/exchangeStockModel';
import ExchangeStocks from './ExchangeStocks';


interface IInvestProps {
    exchangeStocks: ExchangeStock[]
}

const Invest: React.FunctionComponent<IInvestProps> = ({exchangeStocks}) => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='main'>
                <h2> ESG Stock Exchange</h2>
                <div className="mb-1">
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
                
            </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
        
};

export default Invest;