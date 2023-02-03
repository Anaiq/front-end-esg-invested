import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {Investor} from '../models/investorModel';
import PortfolioTable from './PortfolioTable';
import Salutation from './Salutation';


interface IPortfolioHomeProps {
    portfolios: any;
    investor: Investor
}

const PortfolioHome: React.FunctionComponent<IPortfolioHomeProps> = ({portfolios, investor}) => {
    return (
        <section>
            <header>
                <Header/>
            </header>
            <main className="main">
                <h2>PORTFOLIO PAGE</h2>
                <Salutation investor={investor}/>
                <PortfolioTable portfolioStocks={portfolios}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
        
    );
};

export default PortfolioHome;