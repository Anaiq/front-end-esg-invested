import * as React from 'react';
import { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
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
            <Form.Group className='mb-3'>
                <Form.Label>Deposits</Form.Label>
                <Form.Control  onChange={handleDepositChange} placeholder='Enter Deposit Amount'></Form.Control>
            </Form.Group>
            <Button variant='light' size='sm' type='submit' value='Deposit Money' >Deposit Money</Button>
        </Form>
    );
};

export default MoneyForm;
