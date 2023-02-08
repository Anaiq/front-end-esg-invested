import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Investor } from '../models/investorModel';
interface IMoneyBalanceProps {
    investor:Investor
}

const MoneyBalance: React.FunctionComponent<IMoneyBalanceProps> = ({investor}) => {
    return (
        <>
        <Card
            text={'dark'}
            style={{ width: '18rem' }}
            className="mb-2"
            >
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title> Current Cash Balances </Card.Title>
                <Card.Text>
                    Total Cash Balance: $ {`${(investor.cashBalance/100).toFixed(2)}`}
                </Card.Text>
                <Card.Text>
                    Total Shares Cash Balance: $ {`${(investor.totalSharesCashValue/100).toFixed(2)}`}
                </Card.Text>
                <Card.Text>
                    Total Assets Balance: $ {`${(investor.totalAssetsBalance/100).toFixed(2)}`}
                </Card.Text>
            </Card.Body>
        </Card>
        </>
        
    );
};

export default MoneyBalance;
