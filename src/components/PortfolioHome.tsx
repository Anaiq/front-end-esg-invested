import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {Investor} from '../models/investorModel';
import PortfolioTable from './PortfolioTable';


interface IPortfolioHomeProps {
    portfolios: any;
    // investor: any
}

const PortfolioHome: React.FunctionComponent<IPortfolioHomeProps> = ({portfolios}) => {
    return (
        <section>
            <header>
                <Header/>
            </header>
            <main className="main">
                <h2>PORTFOLIO PAGE</h2>
                <PortfolioTable portfolioStocks={portfolios}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
        
    );
};

export default PortfolioHome;