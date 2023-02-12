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
}

const PortfolioHome: React.FunctionComponent<IPortfolioHomeProps> = ({portfolios, investor, handleAddMoneySubmit, stockRatings, goalChartData }) => {
    console.log(`investorData.investorName: ${investor.investorName}`)
    return (
        <div className='container'>
            <div className="row mb-5">
                <div className="col">
                    <header className='portfolio'>
                        <Header/>
                    </header>
                </div>  
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>

            <div className="row mb-5">
                <Salutation investor={investor}/>
            </div>

            <div className="row">
                    <MoneyDisplay investor={investor} handleAddMoneySubmit={handleAddMoneySubmit} ></MoneyDisplay>
            </div>

            <div className='container  mb-5'>
                <div className="row text-center mb-5"><h2>ESG Goals and Current Portfolio ESG Ratings</h2></div>
                <div className="col"></div>
                <div className="col">
                    <Charts goalChartData={goalChartData} />
                </div>
                <div className="col"></div>
            </div>
            
            <div className="row mb-3">
                <div className="col"><ESGFilter/></div>
                <div className="col"><ESGRatingsFilter /></div>
            </div>

            <div className="col">
                    <PortfolioTable stockRatings={stockRatings} portfolioStocks={portfolios}/>
                </div>

            <div className="row mb-5 text-center">
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div >
    );
};

export default PortfolioHome;