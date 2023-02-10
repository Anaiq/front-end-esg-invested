import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import Header from './Header';
import { Investor } from "../models/investorModel";


const kDefaultFormState = {
buyerId: 0,
stockSymbol: '',
currentStockPrice: 0,
numberStockSharesBuy: '0',
transactionType:'buy'
}

interface IBuyFormProps {
    handleBuyStockSubmit: any,
    investor:Investor
}

const BuyForm: React.FunctionComponent<IBuyFormProps> = ({ investor, handleBuyStockSubmit}) => {
    const [buyFormData, setBuyFormData] = useState(kDefaultFormState);
    // console.log('buyFormData:', buyFormData)

    const handleBuyChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = event.target.value;
        const fieldName = event.target.name; 
        const newFormData = {...buyFormData, buyerId:investor.investorId, [fieldName]:fieldValue, transactionType:'buy'};
        console.log('newFormData:', newFormData);
        setBuyFormData(newFormData);
    }

    console.log('BuyFormData.numberStockSharesBuy: ', buyFormData.numberStockSharesBuy);

    const navigate = useNavigate();

    const handleBuySubmit = (event:any): void => {
    event.preventDefault()
if (!buyFormData.stockSymbol ) return;
    if (buyFormData === undefined) {
        return;
    } else {
        handleBuyStockSubmit(buyFormData)
        navigate('/portfolio');
    } 
    }

    return (
        <div className="buy-form-container">
            <header>
                <Header/>
            </header>
            <h2>Buy</h2>
            <Form className="buy-form" onSubmit={handleBuySubmit}>
                <Form.Group className="mb-3" controlId="stockSymbol">
                <Form.Label>Stock Symbol</Form.Label>
                <Form.Control onChange={handleBuyChange} name="stockSymbol" type="text" placeholder="Stock Symbol" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="currentStockPrice">
                <Form.Label>Current Stock Price</Form.Label>
                <Form.Control onChange={handleBuyChange} name="currentStockPrice" type="text" placeholder="Current Stock Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="numberStockSharesBuy">
                <Form.Label>Number of Shares to Buy</Form.Label>
                <Form.Control onChange={handleBuyChange} name="numberStockSharesBuy" type="text" placeholder="Number of Shares" />
                </Form.Group>
                
                <Button variant="secondary" type="submit">
                    Buy
                </Button>
            </Form>
        </div>
        
    );
};

export default BuyForm;

