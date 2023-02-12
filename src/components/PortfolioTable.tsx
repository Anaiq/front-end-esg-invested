import * as React from 'react';
import Table from 'react-bootstrap/Table';
import PortfolioStocks from './PortfolioStocks';
import { Stock } from '../models/stockModel';
import { PortfolioStock } from '../models/portfolioStockModel';

interface IPortfolioTableProps {
    portfolioStocks: PortfolioStock[],
    stockRatings: Stock[]
}

const PortfolioLists: React.FunctionComponent<IPortfolioTableProps> = ({portfolioStocks, stockRatings }) => {
    console.log('portfolioStocks: ', portfolioStocks)
    
    return ( 
        <div className="container text-start">
            <Table striped hover>
                <thead>
                    <tr>
                        <th><h5>Stock Symbol</h5></th>
                        <th><h5>Company Name</h5></th>
                        <th><h5>Current Stock Price</h5></th>
                        <th><h5>Number Stock Shares</h5></th>
                        <th><h5>Transaction Total Value</h5></th>
                        <th><h5>Transaction Type</h5></th>
                        <th><h5>Transaction Time</h5></th>
                        <th><h5>Environment Rating</h5></th>
                        <th><h5>Social Rating</h5></th>
                        <th><h5>Governance Rating</h5></th>
                    </tr>
                </thead>
                <tbody>
                    {portfolioStocks.map((portfolioStock) => (<PortfolioStocks stockRatings={stockRatings} portfolioStock={portfolioStock} {...portfolioStock}/>))}
                </tbody>
            </Table>
        </div>
            
    );
};

export default PortfolioLists;
