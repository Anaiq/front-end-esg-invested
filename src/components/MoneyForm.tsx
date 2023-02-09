import * as React from 'react';
import { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import { Investor } from '../models/investorModel';


const kDefaultForState = {
    id:0,
    cashDeposit: 0
}  


interface IMoneyFormProps {
    investor:Investor
    handleAddMoneySubmit:any

}

const MoneyForm: React.FunctionComponent<IMoneyFormProps> = ({investor, handleAddMoneySubmit}) => {
    
    const [depositFormData, setDepositFormData] = useState(kDefaultForState);
    console.log('depositFormData:', depositFormData);

    const handleDepositChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = +event.target.value * 100 ;
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
                {/* <Form.Select aria-label='Add Money' >
                    <option>Add money to my account</option>
                    <option value='fifty'>$50.00</option>
                    <option value='one hundred'>$100.00</option>
                    <option value='five hundred'>$500.00</option>
                    <option value='one thousand'>$1000.00</option>
                    <option value='five thousand'>$5000.00</option>
                    <option value='ten thousand'>$10000.00</option>
                </Form.Select> */}
                <Form.Control  onChange={handleDepositChange} placeholder='Enter Deposit Amount'></Form.Control>
            </Form.Group>
            <Button variant='light' size='sm' type='submit' value='Deposit Money' >Deposit Money</Button>
        </Form>
    );
};

export default MoneyForm;
