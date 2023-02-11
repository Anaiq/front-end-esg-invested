import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import {Investor} from '../models/investorModel';
import { Stock } from '../models/stockModel';
import PortfolioTable from './PortfolioTable';
import Salutation from './Salutation';
import MoneyDisplay from './Money';
import ESGRatingsFilter from './RatingFilter';
import ESGFilter from './ESGFilter';
import Charts from './Charts';


interface IPortfolioHomeProps {
    portfolios: any;
    investor: Investor
    handleAddMoneySubmit: any
    stockRatings: Stock[]
    getPortfolioChartData: any
    goalChartData:{
        AAA:number,
        AA:number,
        A:number,
        BBB:number,
        BB:number,
        B:number,
        CCC:number,
        CC:number,
        }
    portfolioChartData: {
        AAA:number,
        AA:number,
        A:number,
        BBB:number,
        BB:number,
        B:number,
        CCC:number,
        CC:number,
    }

}

const PortfolioHome: React.FunctionComponent<IPortfolioHomeProps> = ({portfolios, investor, handleAddMoneySubmit, stockRatings,
    goalChartData, portfolioChartData, getPortfolioChartData}) => {
    console.log(`investorData.investorName: ${investor.investorName}`)
    return (
        <div>
            <header className='portfolio'>
                <Header/>
            </header>
            <div>
                <Salutation investor={investor}/>
                <h2>ESG Goals and Current Portfolio ESG Ratings</h2>
                <div className='goal-charts'>
                <Charts goalChartData={goalChartData} portfolioChartData={portfolioChartData} getPortfolioChartData={getPortfolioChartData}/>
                </div>
                <MoneyDisplay investor={investor} handleAddMoneySubmit={handleAddMoneySubmit} ></MoneyDisplay>
                <div>
                    <ESGFilter />
                    <ESGRatingsFilter />
                </div>
                <div>
                    <PortfolioTable stockRatings={stockRatings} portfolioStocks={portfolios}/>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div >
        
    );
};

export default PortfolioHome;