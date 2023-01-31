import * as React from 'react';
import Button from 'react-bootstrap/Button'


export interface ExchangeStock {
        exchange_id: number,
        stockSymbol: string,
        companyName: string,
        currentStockPrice: string,
        environmentScore: string,
        socialScore: string,
        governanceScore: string
    
}

const ExchangeStocks: React.FunctionComponent<ExchangeStock> = (ExchangeStock) => {
    return (
        <tr>
            <td>{ExchangeStock.stockSymbol}</td>
            <td>{ExchangeStock.companyName}</td>
            <td>{ExchangeStock.currentStockPrice}</td>
            <td>{ExchangeStock.environmentScore}</td>
            <td>{ExchangeStock.socialScore}</td>
            <td>{ExchangeStock.governanceScore}</td>
            <td></td>
            <td><Button as="input" type="submit" value="Buy" variant="secondary"></Button></td>
        </tr>
    );
};

export default ExchangeStocks;

