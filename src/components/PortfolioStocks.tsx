import * as React from 'react';
import { useState } from 'react';
import { PortfolioStock } from '../models/portfolioStockModel';
import { Stock } from '../models/stockModel';
import Button from 'react-bootstrap/Button'

const kDefaultForState = {
    stockSymbol: "",
    companyName: "",
    currentStockPrice:"",
    numberStockShares:"",
    transactionTotalValue:"",
    transactionType: "",
    transactionTime: "",
    buyerId: 0,
    stockId: 0
}


interface IPStockProps {
    portfolioStock: PortfolioStock
    stockRatings: Stock[]
    // handleBuyStockSubmit: any
    // handleSellStockSubmit: any
}

const PortfolioStocks: React.FunctionComponent<IPStockProps> = ({portfolioStock, stockRatings}) => {
    

    return (
            <tr>
                <td>{portfolioStock.stockSymbol}</td>
                <td>{portfolioStock.companyName}</td>
                <td>$ {(portfolioStock.currentStockPrice/100).toFixed(2)}</td>
                <td>{portfolioStock.numberStockShares}</td>
                <td>$ {(portfolioStock.transactionTotalValue/100).toFixed(2)}</td>
                <td>{portfolioStock.transactionType}</td>
                <td>{portfolioStock.transactionTime}</td>
                <td>{portfolioStock.environmentRating}</td>
                <td>{portfolioStock.socialRating}</td>
                <td>{portfolioStock.governanceRating}</td>
                
                <td><Button  as="input" type="submit" value="Buy" variant="secondary"></Button></td>
                <td><Button  as="input" type="submit" value="Sell" variant="secondary"></Button></td>
            </tr>
    );
};

export default PortfolioStocks;