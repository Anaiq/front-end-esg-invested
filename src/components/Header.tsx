import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <Navbar fixed="top" bg="light" variant="light">
            <Container>
                <Navbar.Text >
                    <h3>ESGInvested</h3>
                </Navbar.Text> 
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav defaultActiveKey="/portfolio" as="ul">
                            <Nav.Item as="li">
                            <Link to='/portfolio' className='btn'><Nav.Link href="/portfolio" eventKey="portfolio">Portfolio</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/about' className='btn'><Nav.Link href="/about" eventKey="about">About</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/esg-goal-planner' className='btn'><Nav.Link href="/esg-goal-planner"eventKey="esg-goal-planner">ESG Goal Planner</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/invest' className='btn'><Nav.Link href="/invest" eventKey="invest">Invest</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/transactions' className='btn'><Nav.Link href="/transactions" eventKey="transactions">Transactions</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/logout' className='btn'><Nav.Link href="/logout" eventKey="logout">Logout</Nav.Link></Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Text>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 mt-3" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header;

