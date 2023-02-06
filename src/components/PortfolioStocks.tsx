import * as React from 'react';
import { PortfolioStock } from '../models/portfolioStockModel';
import Button from 'react-bootstrap/Button'


interface IPStockProps {
    portfolioStock: PortfolioStock
}

const PortfolioStocks: React.FunctionComponent<IPStockProps> = ({portfolioStock}) => {
    return (
            <tr>
                <td>{portfolioStock.stockSymbol}</td>
                <td>{portfolioStock.companyName}</td>
                <td>$ {(portfolioStock.currentStockPrice/100).toFixed(2)}</td>
                <td>{portfolioStock.numberStockShares}</td>
                <td>$ {(portfolioStock.transactionTotalValue/100).toFixed(2)}</td>
                <td>{portfolioStock.transactionType}</td>
                <td>{portfolioStock.transactionTime}</td>
                <td>{portfolioStock.environmentRating}</td>
                <td>{portfolioStock.socialRating}</td>
                <td>{portfolioStock.governanceRating}</td>
                
                <td><Button as="input" type="submit" value="Buy" variant="secondary"></Button></td>
                <td><Button as="input" type="submit" value="Sell" variant="secondary"></Button></td>
            </tr>
    );
};

export default PortfolioStocks;