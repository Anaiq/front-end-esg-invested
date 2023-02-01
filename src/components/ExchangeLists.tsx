import * as React from 'react';
import Table from 'react-bootstrap/Table';
import { ExchangeStock } from '../models/exchangeStockModel';
import ExchangeStocks from './ExchangeStocks';

interface IExchangeListProps {
    exchangeStocks: ExchangeStock[]
}

const ExchangeLists: React.FunctionComponent<IExchangeListProps> = ({exchangeStocks}) => {
    return (
        <section>
            <h2> ESG Stock Exchange</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>Stock Symbol</th>
                        <th>Company Name</th>
                        <th>Current Stock Price</th>
                        <th>Environment Rating</th>
                        <th>Social Rating</th>
                        <th>Governance Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {exchangeStocks.map((exchangeStock) => (<ExchangeStocks exchangeStock={exchangeStock} {...exchangeStock}/>))}
                </tbody>
            </Table>
        </section>
    );
};

export default ExchangeLists;
