import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Footer from './Footer';

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
    return (


        <div>
            <header>
                <Header/>
            </header>
            <main className="main">
                <h2>About Page</h2>
                <Container >
                    <Row>
                        <Col>
                            <section id="about" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis lacus, sagittis ac vehicula 
                            sit amet, congue accumsan ipsum. Integer rhoncus placerat neque. Curabitur non justo accumsan, 
                            lobortis ante et, volutpat nibh. Fusce suscipit efficitur eleifend. Donec dapibus mollis purus. 
                            Vestibulum sodales neque quis dictum pharetra. Mauris in euismod dolor, eu rhoncus justo. Pellentesque. 
                            Fusce sed rhoncus augue. Quisque non aliquet neque, sit amet commodo mauris. In sagittis, metus quis. 

                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Learn More About ESG Investing:</Col>
                    </Row>
                    
                    <Row>
                        <Col><a href="https://www.investopedia.com/terms/e/environmental-social-and-governance-esg-criteria.asp">What Is Environmental, Social, and Governance (ESG) Investing?</a></Col>
                        <Col><a href="https://www.fool.com/investing/stock-market/types-of-stocks/esg-investing/esg-rating/">What Is an ESG Rating?</a></Col>
                        <Col><a href="https://www.investopedia.com/financial-advisor/esg-sri-impact-investing-explaining-difference-clients/">ESG, SRI, and Impact Investing: What's the Difference?</a></Col>
                    </Row>
                    <Row>
                        <Col><a href="https://www.investopedia.com/terms/g/green-investing.asp">What Is Green Investing?</a></Col>
                        <Col><a href="https://www.investopedia.com/terms/s/sri.asp">What Is a Socially Responsible Investment (SRI)?</a></Col>
                    </Row>
                </Container>
            </main>
            
            {/* <footer>
                <Footer/>
            </footer> */}
        </div>
    );
};

export default About;
            
            
            