import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import Header from './Header';
import Footer from './Footer';
import { Investor } from "../models/investorModel";


const kDefaultFormState = {
id: 0,
stockSymbol: '',
currentStockPrice: +"0",
numberStockSharesSell: "0",
transactionType:"buy"
}

interface ISellFormProps {
    handleSellStockSubmit: any,
    investor:Investor
}

const SellForm: React.FunctionComponent<ISellFormProps> = ({ investor, handleSellStockSubmit}) => {
    const [sellFormData, setSellFormData] = useState(kDefaultFormState);
    // console.log("sellFormData:", sellFormData)

    const handleSellChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = event.target.value;
        const fieldName = event.target.name; 
        const newFormData = {...sellFormData, [fieldName]:fieldValue, transactionType:"sell"};
        console.log("newFormData:", newFormData);
        setSellFormData(newFormData);
    }

    console.log('SellFormData.stockSymbol: ', sellFormData.stockSymbol);

    const navigate = useNavigate();

    const handleSellSubmit = (event:any): void => {
    event.preventDefault()
if (!sellFormData.stockSymbol ) return;
    if (sellFormData === undefined) {
        return;
    } else {
        handleSellStockSubmit(sellFormData)
        navigate('/portfolio');
    }

    
    }

    return (
        <div className="sell-form-container">
            <header>
                <Header/>
            </header>
            {/* <main className="main"></main> */}
            <h2>Sell</h2>
            <Form className="sell-form" onSubmit={handleSellSubmit}>
                <Form.Group className="mb-3" controlId="stockSymbol">
                <Form.Label>Stock Symbol</Form.Label>
                <Form.Control onChange={handleSellChange} type="text" placeholder="Stock Symbol" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="currentStockPrice">
                <Form.Label>Current Stock Price</Form.Label>
                <Form.Control onChange={handleSellChange} type="text" placeholder="Current Stock Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="numberStockSharesSell">
                <Form.Label>Number of Shares to Sell</Form.Label>
                <Form.Control onChange={handleSellChange} name="NumberStockSharesSell" type="text" placeholder="Number of Shares" />
                </Form.Group>
                
                <Button variant="secondary" type="submit">
                    Sell
                </Button>
            </Form>
        </div>
        
    );
};

export default SellForm;

