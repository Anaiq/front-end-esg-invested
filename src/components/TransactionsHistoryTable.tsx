import * as React from 'react';
import Table from 'react-bootstrap/Table';
import { Investor } from '../models/investorModel'; //importing the Investor interface
import TransactionStocks from './TransactionStocks';
import { Transaction } from '../models/transactionModel';


interface ITransactionsHistoryProps {
    transactionStocks: Transaction[],
    investor?: Investor
}

const TransactionsHistoryTable: React.FunctionComponent<ITransactionsHistoryProps> = ({transactionStocks, investor}) => {
    return (
        <div>
            <h2>{investor? `${investor.investorName}`: "Investor"}'s Transactions History</h2>
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
                    </tr>
                </thead>
                <tbody>
                    {transactionStocks.map((transactionStock) => (<TransactionStocks transactionStock={transactionStock} {...transactionStock}/>))}
                </tbody>
            </Table>
        </div>
    );
};

export default TransactionsHistoryTable;
