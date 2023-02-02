import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <section>
            <header>
                <Header/>
            </header>
            <main className="main">
            {/* {
                currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
            }  */}
        {/* <ExchangeLists exchangeStocks={exchanges}/>
        <PortfolioLists portfolioStocks={portfolios} investor={investor}/>
        <About /> */}
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
        
    );
};

export default Home;
