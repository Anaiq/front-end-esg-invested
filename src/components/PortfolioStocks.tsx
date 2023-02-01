import * as React from 'react';
import { Investor } from '../models/investorModel'; //importing the Investor interface
import { Transaction } from '../models/transactionModel'; //importing the Investor interface
import { Stock } from '../models/stockModel'; //importing the Investor interface
import Button from 'react-bootstrap/Button'


interface IPStockProps {
    transaction:Transaction,
    stock:Stock
}

const PortfolioStocks: React.FunctionComponent<IPStockProps> = ({transaction, stock}) => {
    return (
        <tr>
            <td>{transaction.stockSymbol}</td>
            <td>{transaction.companyName}</td>
            <td>{transaction.currentStockPrice}</td>
            <td>{transaction.numberStockShares}</td>
            <td>{transaction.transactionTotalValue}</td>
            <td>{transaction.transactionType}</td>
            <td>{transaction.transactionTime}</td>
            <td>{stock.environmentRating}</td>
            <td>{stock.socialRating}</td>
            <td>{stock.governanceRating}</td>
            
            <td><Button as="input" type="submit" value="Buy" variant="secondary"></Button></td>
            <td><Button as="input" type="submit" value="Sell" variant="secondary"></Button></td>
        </tr>
    );
};

export default PortfolioStocks;