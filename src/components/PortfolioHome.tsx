import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import {Investor} from '../models/investorModel';
import PortfolioTable from './PortfolioTable';
import Salutation from './Salutation';
import MoneyDisplay from './Money';
import ESGRatingsFilter from './RatingFilter';
import ESGFilter from './ESGFilter';
import GoalChart from './GoalChart';
import CurrentChart from './CurrentChart';


interface IPortfolioHomeProps {
    portfolios: any;
    investor: Investor
}

const PortfolioHome: React.FunctionComponent<IPortfolioHomeProps> = ({portfolios, investor}) => {
    console.log(`investorData.investorName: ${investor?.investorName}`)
    return (
        <div className='portfolio'>
            {/* <header>
                <Header/>
            </header> */}
            <main className='main'>
                <Salutation investor={investor}/>
                <div className='chart'>
                    <h2>Your ESG Goal Chart</h2>
                    <GoalChart />
                    <h2>Your Current ESG Allocations</h2>
                    <CurrentChart />
                    <MoneyDisplay investor={investor}></MoneyDisplay>
                </div>
                <div>
                    <ESGFilter />
                    <ESGRatingsFilter />
                </div>
                <div>
                    <PortfolioTable portfolioStocks={portfolios}/>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div >
        
    );
};

export default PortfolioHome;