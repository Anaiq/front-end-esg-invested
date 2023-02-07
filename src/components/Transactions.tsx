import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import TransactionsHistoryTable from './TransactionsHistoryTable';
import { Investor } from '../models/investorModel';



interface ITransactionsProps {
    transactions: any;
    investor: Investor
}

const Transactions: React.FunctionComponent<ITransactionsProps> = ({transactions, investor}) => {
    console.log('investorName: ', investor.investorName, 'investorID: ', investor.investorId )
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main >
                <h2>{`${investor.investorName}`}'s History of Transactions</h2><br></br>
                <TransactionsHistoryTable transactionStocks={transactions}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
        
    );
};

export default Transactions;