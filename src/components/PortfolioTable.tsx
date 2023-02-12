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
        <div className="container">
            <Table striped hover>
                <thead>
                    <tr>
                        <th><h4 className='text center'>Stock Symbol</h4></th>
                        <th><h4>Company Name</h4></th>
                        <th><h4>Current Stock Price</h4></th>
                        <th><h4>Number Stock Shares</h4></th>
                        <th><h4>Transaction Total Value</h4></th>
                        <th><h4>Transaction Type</h4></th>
                        <th><h4>Transaction Time</h4></th>
                        <th><h4>Environment Rating</h4></th>
                        <th><h4>Social Rating</h4></th>
                        <th><h4>Governance Rating</h4></th>
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
