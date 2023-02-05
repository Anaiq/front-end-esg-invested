import * as React from 'react';
import { Investor } from '../models/investorModel';
import {Form} from 'react-bootstrap';


interface IMoneyFormProps {
    investor:Investor
}

const MoneyForm: React.FunctionComponent<IMoneyFormProps> = ({investor}) => {
    return (
        <Form.Select aria-label="Default select example">
            <option>Add money to my account</option>
            <option value="1">$50.00</option>
            <option value="2">$100.00</option>
            <option value="3">$500.00</option>
            <option value="3">$1000.00</option>
            <option value="3">$5000.00</option>
            <option value="3">$10000.00</option>
        </Form.Select>

    );
};

export default MoneyForm;
