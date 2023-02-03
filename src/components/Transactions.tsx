import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import TransactionsHistoryTable from './TransactionsHistoryTable';



interface ITransactionsProps {
    transactions: any;
}

const Transactions: React.FunctionComponent<ITransactionsProps> = ({transactions}) => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className="main">
                <h2>HISTORY OF TRANSACTIONS</h2><br></br>
                <TransactionsHistoryTable transactionStocks={transactions}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
        
    );
};

export default Transactions;