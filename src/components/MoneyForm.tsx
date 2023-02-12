import * as React from 'react';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import {Form} from 'react-bootstrap';
import { Investor } from '../models/investorModel';


const kDefaultForState = {
    id:0,
    cashDeposit: "0"
}  


interface IMoneyFormProps {
    investor:Investor
    handleAddMoneySubmit:any

}

const MoneyForm: React.FunctionComponent<IMoneyFormProps> = ({investor, handleAddMoneySubmit}) => {
    
    const [depositFormData, setDepositFormData] = useState(kDefaultForState);
    console.log('depositFormData:', depositFormData);

    const handleDepositChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = event.target.value;
        const newDepositFormData = {...depositFormData, id:investor.investorId, cashDeposit:fieldValue }
        console.log("newFormData:", newDepositFormData);
        setDepositFormData(newDepositFormData);
    }

    console.log('depositFormData.id: ', depositFormData.id);
    console.log('depositFormData.cashDeposit: ', depositFormData.cashDeposit);

    const handleDepositSubmit = (event:any) => {
        event.preventDefault()
        if (!depositFormData) {
            console.log('no depositFormData: ', depositFormData);
            return;
        } else {
            console.log('handleAddMoneySubmit(depositFormData) result:', handleAddMoneySubmit(depositFormData))
            handleAddMoneySubmit(depositFormData!)
        }
    }

    return (
        <Form onSubmit={handleDepositSubmit}>
            <Form.Label>Add money to my account</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" onChange={handleDepositChange} placeholder='Enter Dollar Amount'></Form.Control>
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <button className="btn btn-primary" type="submit" value='Deposit Money'>Deposit Money</button>
        </Form>
    );
};

export default MoneyForm;
