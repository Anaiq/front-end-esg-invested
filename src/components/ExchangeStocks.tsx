import * as React from 'react';
import { ExchangeStock } from '../models/exchangeStockModel'; //importing the Exchange interface
import Button from 'react-bootstrap/Button'

interface IEStockProps {
    exchangeStock: ExchangeStock
}

const ExchangeStocks: React.FunctionComponent<IEStockProps> = ({exchangeStock}) => {
    return (
        <tr>
            <td>{exchangeStock.stockSymbol}</td>
            <td>{exchangeStock.companyName}</td>
            <td>${exchangeStock.currentStockPrice}</td>
            <td>{exchangeStock.environmentRating}</td>
            <td>{exchangeStock.socialRating}</td>
            <td>{exchangeStock.governanceRating}</td>
            <td></td>
            <td><Button as="input" type="submit" value="Buy" variant="secondary"></Button></td>
        </tr>
    );
};

export default ExchangeStocks;

