import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';

interface IPortfolioHomeProps {
}

const PortfolioHome: React.FunctionComponent<IPortfolioHomeProps> = (props) => {
    return (
        <section>
            <header>
                <Header/>
            </header>
            <main className="main">
                <h2>PORTFOLIO PAGE</h2>
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
        
    );
};

export default PortfolioHome;