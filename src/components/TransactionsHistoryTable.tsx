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
        <div className="container text-start">
            <Table striped hover>
                <thead>
                    <tr>
                        <th><h5>Stock Symbol</h5></th>
                        <th><h5>Company Name</h5></th>
                        <th><h5>Current Stock Price</h5></th>
                        <th><h5>Number Stock Shares</h5></th>
                        <th><h5>Transaction Total Value</h5></th>
                        <th><h5>Transaction Type</h5></th>
                        <th><h5>Transaction Time</h5></th>
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
