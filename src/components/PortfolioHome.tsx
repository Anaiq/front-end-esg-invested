import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import {Investor} from '../models/investorModel';
import PortfolioTable from './PortfolioTable';
import Salutation from './Salutation';
import MoneyDisplay from './Money';


interface IPortfolioHomeProps {
    portfolios: any;
    investor: Investor
}

const PortfolioHome: React.FunctionComponent<IPortfolioHomeProps> = ({portfolios, investor}) => {
    console.log(`investorData.investorName: ${investor?.investorName}`)
    return (
        <section>
            {/* <header>
                <Header/>
            </header> */}
            <main className='main'>
                <Salutation investor={investor}/>
                <MoneyDisplay investor={investor}></MoneyDisplay>
                <div>
                    <PortfolioTable portfolioStocks={portfolios}/>
                </div>
                
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
        
    );
};

export default PortfolioHome;