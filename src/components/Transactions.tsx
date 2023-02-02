import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';
import TransactionsHistoryTable from './TransactionsHistoryTable';



interface ITransactionsProps {
    transactions: any;
}

const Transactions: React.FunctionComponent<ITransactionsProps> = ({transactions}) => {
    return (
        <section>
            <header>
                <Header/>
            </header>
            <main className="main">
                <h2>HISTORY OF TRANSACTIONS</h2>
                <TransactionsHistoryTable />
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
        
    );
};

export default Transactions;