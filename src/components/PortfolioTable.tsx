import * as React from 'react';
import Table from 'react-bootstrap/Table';
import PortfolioStocks from './PortfolioStocks';
import { Stock } from '../models/stockModel';
import { PortfolioStock } from '../models/portfolioStockModel';

interface IPortfolioTableProps {
    portfolioStocks: PortfolioStock[],
    stockRatings: Stock[]
    // handleBuyStockSubmit:any
    // handleSellStockSubmit:any
    // stock
}

const PortfolioLists: React.FunctionComponent<IPortfolioTableProps> = ({portfolioStocks, stockRatings }) => {
    console.log('portfolioStocks: ', portfolioStocks)

    // if length is 0: //guard clause for the rendering
    // return null (invisible)
    // OR create portolio enpoint
    
    return ( 
            <Table striped>
                <thead>
                    <tr>
                        <th>Stock Symbol</th>
                        <th>Company Name</th>
                        <th>Current Stock Price</th>
                        <th>Number Stock Shares</th>
                        <th>Transaction Total Value</th>
                        <th>Transaction Type</th>
                        <th>Transaction Time</th>
                        <th>Environment Rating</th>
                        <th>Social Rating</th>
                        <th>Governance Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {portfolioStocks.map((portfolioStock) => (<PortfolioStocks stockRatings={stockRatings} portfolioStock={portfolioStock} {...portfolioStock}/>))}
                </tbody>
            </Table>
    );
};

export default PortfolioLists;
