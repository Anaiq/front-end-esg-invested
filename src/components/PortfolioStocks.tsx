import * as React from 'react';
import { PortfolioStock } from '../models/portfolioStockModel';
import Button from 'react-bootstrap/Button'


interface IPStockProps {
    portfolioStock: PortfolioStock
}

const PortfolioStocks: React.FunctionComponent<IPStockProps> = ({portfolioStock}) => {
    return (
        <section>
            <tr>
                <td>{portfolioStock.stockSymbol}</td>
                <td>{portfolioStock.companyName}</td>
                <td>{portfolioStock.currentStockPrice}</td>
                <td>{portfolioStock.numberStockShares}</td>
                <td>{portfolioStock.transactionTotalValue}</td>
                <td>{portfolioStock.transactionType}</td>
                <td>{portfolioStock.transactionTime}</td>
                <td>{portfolioStock.environmentRating}</td>
                <td>{portfolioStock.socialRating}</td>
                <td>{portfolioStock.governanceRating}</td>
                
                <td><Button as="input" type="submit" value="Buy" variant="secondary"></Button></td>
                <td><Button as="input" type="submit" value="Sell" variant="secondary"></Button></td>
            </tr>
        </section>
    );
};

export default PortfolioStocks;