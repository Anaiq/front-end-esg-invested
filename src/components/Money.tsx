import * as React from 'react';
import { Investor } from '../models/investorModel';
import MoneyBalance from './MoneyBalanceCard';
import MoneyForm from './MoneyForm';


interface IMoneyDisplayProps {
    investor: Investor,
    handleAddMoneySubmit:any
    
}

const MoneyDisplay: React.FunctionComponent<IMoneyDisplayProps> = ({investor, handleAddMoneySubmit}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <MoneyBalance investor={investor}></MoneyBalance>
                </div>
                <div className="col">
                    <MoneyForm investor={investor} handleAddMoneySubmit={handleAddMoneySubmit}></MoneyForm>
                </div>
            </div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
        </div>
    );
};

export default MoneyDisplay;
