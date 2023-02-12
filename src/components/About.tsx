import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <header>
                        <Header/>
                    </header>
                </div>  
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>

            <div className="row mb-5"><h2>About ESGInvested</h2></div>
            
            <div className="row mb-5">
                <div className='col'>
                    <div className="text-primary fs-4"><p>ESGInvested was created from the belief that building financial wealth and
                        building community do not need to be mutually exclusive!  ESGInvested has made this information accessible to the 
                        everyday investor, which offers you a way to invest your hard earn dollars, while also considering 
                        your   <strong><em>personal </em></strong>values to direct where those dollars go.  We want you to know that 
                        those dollars are working for your present and future, but also for your family, your communities, 
                        and your environment.
                    </p></div>
                </div>
            </div>

            <div className="row shadow p-3 mb-5 bg-body-tertiary rounded mb-5">
                <div className="col">
                    <div className="card border-success mb-3" >
                        <div className="card-header text-center">E</div>
                        <div className="card-body">
                            <h4 className="card-title">Environment</h4>
                            <p className="card-text"> "Environment issues may include corporate climate policies, energy use,
                                waste, pollution, natural resource conservation, and treatment of animals." (source investopedia)
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Publishes a carbon or sustainability report</li>
                                <li className="list-group-item">Limits harmful pollutants and chemicals</li>
                                <li className="list-group-item">Seeks to lower greenhouse gas emissions and CO2 footprint</li>
                                <li className="list-group-item">Uses renewable energy sources and reduces waste</li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-success mb-3" >
                        <div className="card-header text-center">S</div>
                        <div className="card-body">
                            <h4 className="card-title">Social</h4>
                            <p className="card-text">
                            "Social aspects look at the company’s relationships with internal and external stakeholders."
                            (source investopedia)
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Operates an ethical supply chains</li>
                                <li className="list-group-item">Has a high regard for employees’ health and safety
                                    or avoids companies that employ child labor</li>
                                <li className="list-group-item">Supports LGBTQ+ rights and encourages all forms of diversity</li>
                                <li className="list-group-item">Has policies to protect against sexual misconduct</li>
                                <li className="list-group-item">Pays fair (living) wages</li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-success mb-3" >
                        <div className="card-header text-center">G</div>
                            <div className="card-body">
                                <h4 className="card-title ">Governance</h4>
                                <p className="card-text">
                                "Governance standards ensure a company uses accurate and transparent accounting methods, 
                                pursues integrity and diversity in selecting its leadership, and is accountable to shareholders."
                                (source investopedia)
                                </p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Embraces diversity on board of directors</li>
                                    <li className="list-group-item">Embraces corporate transparency</li>
                                    <li className="list-group-item">Someone other than the CEO is chair of the board</li>
                                    <li className="list-group-item">Staggers board elections</li>
                                </ul>  
                            </div>
                        </div>
                    </div>
                </div >

                <div className="row mb-5"></div>
                <div className="row mb-5">
                    <div className="col text-start">
                        <h4>Learn More About ESG Investing:</h4>
                    </div>
                </div>

                <div className="container">
                    <div className="row mb-5">
                        <div className="col-6 text-start">
                            <div className="list-group">
                                <a href="https://www.investopedia.com/terms/e/environmental-social-and-governance-esg-criteria.asp"
                                    target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">What Is Environmental, Social, and Governance (ESG) Investing?</a>
                                <a href="https://www.fool.com/investing/stock-market/types-of-stocks/esg-investing/esg-rating/" 
                                    target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">What Is an ESG Rating?</a>
                                <a href="https://www.investopedia.com/terms/s/sri.asp" target="_blank" rel="noopener noreferrer" 
                                    className="list-group-item list-group-item-action">What Is a Socially Responsible Investment (SRI)?</a>
                            </div>
                        </div>
                        <div className="col-6 text-start">
                            <div className="list-group">
                                <a href="https://www.investopedia.com/terms/g/green-investing.asp" target="_blank" rel="noopener noreferrer" 
                                    className="list-group-item list-group-item-action">What Is Green Investing?</a>
                                <a href="https://www.investopedia.com/financial-advisor/esg-sri-impact-investing-explaining-difference-clients/" 
                                    target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">ESG, SRI, and Impact Investing: What's the Difference?</a>
                                <a href="https://www.investopedia.com/terms/i/impact-investing.asp" target="_blank" rel="noopener noreferrer" 
                                    className="list-group-item list-group-item-action">What Is Impact Investing?</a>
                            </div>
                        </div>
                    </div>
                </div>
                

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>

            
            <div className="row mb-5 text-center">
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default About;
            
            
