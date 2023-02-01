import * as React from 'react';
import Table from 'react-bootstrap/Table';
import PortfolioStocks from './PortfolioStocks';
import { Investor } from '../models/investorModel';
import { Transaction } from '../models/transactionModel';
import { Stock } from '../models/stockModel';

interface IPortfolioListProps {
    portfolioStocks: any[],
    investor:Investor,
    transaction:Transaction,
    stock:Stock
}

const PortfolioLists: React.FunctionComponent<IPortfolioListProps> = ({portfolioStocks, investor}) => {
    return (
        <section>
            <h2> Happy Investing, {investor.investorName}!</h2>
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
                    {portfolioStocks.map((portfolioStock) => (<PortfolioStocks portfolioStock={portfolioStock} {...portfolioStock}/>))}
                </tbody>
            </Table>
        </section>
    );
};

export default PortfolioLists;
