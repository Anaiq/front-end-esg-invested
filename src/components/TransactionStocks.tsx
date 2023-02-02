import * as React from 'react';
import { Transaction } from '../models/transactionModel';


interface ITStockProps {
    transactionStock: Transaction
}

const TransactionStocks: React.FunctionComponent<ITStockProps> = ({transactionStock}) => {
    return (
        <section>
            <tr>
                <td>{transactionStock.stockSymbol}</td>
                <td>{transactionStock.companyName}</td>
                <td>{transactionStock.currentStockPrice}</td>
                <td>{transactionStock.numberStockShares}</td>
                <td>{transactionStock.transactionTotalValue}</td>
                <td>{transactionStock.transactionType}</td>
                <td>{transactionStock.transactionTime}</td>
            </tr>
        </section>
    );
};

export default TransactionStocks;