import * as React from 'react';
import { Transaction } from '../models/transactionModel';


interface ITStockProps {
    transactionStock: Transaction
}

const TransactionStocks: React.FunctionComponent<ITStockProps> = ({transactionStock}) => {
    return (
            <tr>
                <td>{transactionStock.stockSymbol}</td>
                <td>{transactionStock.companyName}</td>
                <td>$ {(transactionStock.currentStockPrice/100).toFixed(2)}</td>
                <td>{transactionStock.numberStockShares}</td>
                <td>$ {(transactionStock.transactionTotalValue/100).toFixed(2)}</td>
                <td>{transactionStock.transactionType}</td>
                <td>{transactionStock.transactionTime}</td>
            </tr>
    );
};

export default TransactionStocks;