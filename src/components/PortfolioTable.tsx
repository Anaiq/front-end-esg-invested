import * as React from 'react';
import Table from 'react-bootstrap/Table';
import { Investor } from '../models/investorModel'; //importing the Investor interface
import PortfolioStocks from './PortfolioStocks';
import { PortfolioStock } from '../models/portfolioStockModel';

interface IPortfolioTableProps {
    portfolioStocks: PortfolioStock[],
    investor?: Investor
}

const PortfolioLists: React.FunctionComponent<IPortfolioTableProps> = ({portfolioStocks, investor}) => {
    return (
        <section>
            <h2> Happy Investing, {investor ? `, ${investor.investorName}` : "Investor"}!</h2>
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
