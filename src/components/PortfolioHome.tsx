import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import {Investor} from '../models/investorModel';
import PortfolioTable from './PortfolioTable';
import Salutation from './Salutation';
import MoneyDisplay from './Money';
import ESGRatingsFilter from './RatingFilter';
import ESGFilter from './ESGFilter';
import Charts from './Charts';


interface IPortfolioHomeProps {
    portfolios: any;
    investor: Investor
}

const PortfolioHome: React.FunctionComponent<IPortfolioHomeProps> = ({portfolios, investor}) => {
    console.log(`investorData.investorName: ${investor?.investorName}`)
    return (
        <div className='portfolio'>
            <header>
                <Header/>
            </header>
            <main className='main'>
                <Salutation investor={investor}/>
                <h2>ESG Goal Chart and Current Portfolio ESG Ratings</h2>
                <Charts />
                <MoneyDisplay investor={investor}></MoneyDisplay>
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