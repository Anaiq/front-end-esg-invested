import * as React from 'react';
import { Investor } from '../models/investorModel';
import {Form} from 'react-bootstrap';


interface IMoneyFormProps {
    investor:Investor
}

const MoneyForm: React.FunctionComponent<IMoneyFormProps> = ({investor}) => {
    return (
        <Form.Select aria-label="Add Money">
            <option>Add money to my account</option>
            <option value="fifty">$50.00</option>
            <option value="one hundred">$100.00</option>
            <option value="five hundred">$500.00</option>
            <option value="one thousand">$1000.00</option>
            <option value="five thousand">$5000.00</option>
            <option value="ten thousand">$10000.00</option>
        </Form.Select>

    );
};

export default MoneyForm;
