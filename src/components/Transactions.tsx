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
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <header>
                        <Header/>
                    </header>
                </div>  
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row  mb-5"><h2>{`${investor.investorName}`}'s Transaction History:</h2></div>
            
            <div className="row">
                <div className="col-1"></div>
                <div className="col"><TransactionsHistoryTable transactionStocks={transactions}/></div>
                <div className="col-1"></div>
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5 text-center">
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
        
    );
};

export default Transactions;