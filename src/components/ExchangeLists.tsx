import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header'; 
import Footer from './Footer';
import { ExchangeStock } from '../models/exchangeStockModel';
import ExchangeStocks from './ExchangeStocks';

interface IExchangeListProps {
    exchangeStocks: ExchangeStock[]
}

const ExchangeLists: React.FunctionComponent<IExchangeListProps> = ({exchangeStocks}) => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main id="exchange">
                <h2> ESG Stock Exchange</h2>
                <div className="mb-3">
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

export default ExchangeLists;
