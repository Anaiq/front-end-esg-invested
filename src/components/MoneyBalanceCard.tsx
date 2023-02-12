import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Investor } from '../models/investorModel';
interface IMoneyBalanceProps {
    investor:Investor
}

const MoneyBalance: React.FunctionComponent<IMoneyBalanceProps> = ({investor}) => {
    return (
        <div className="container shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card border-warning mb-3">
            <div className="card-header"><h4>Portfolio Account Balances</h4></div>
                <div className="card-body">
                    <p className="card-text lead">Total Cash Balance: $ {`${(investor.cashBalance/100).toFixed(2)}`}</p>
                    <p className="card-text lead">Total Shares Cash Balance: $ {`${(investor.totalSharesCashValue/100).toFixed(2)}`}</p>
                    <p className="card-text lead">Total Assets Balance: $ {`${(investor.totalAssetsBalance/100).toFixed(2)}`}</p>
                </div>
            </div>
        </div>
    );
};

export default MoneyBalance;