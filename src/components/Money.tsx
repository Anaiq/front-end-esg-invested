import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Investor } from '../models/investorModel';
import MoneyBalance from './MoneyBalanceCard';
import MoneyForm from './MoneyForm';


interface IMoneyDisplayProps {
    investor: Investor,
}

const MoneyDisplay: React.FunctionComponent<IMoneyDisplayProps> = ({investor}) => {
    return (
        <div>
            <div>
                <MoneyBalance investor={investor}></MoneyBalance>
            </div>
            <div>
                <MoneyForm investor={investor}></MoneyForm>
            </div>
            <Button variant="light" size="sm" type="submit" value="Deposit Money" >Deposit Money</Button>
        </div>
        
    );
};

export default MoneyDisplay;
