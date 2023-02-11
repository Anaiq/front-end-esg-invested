import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface ILoginHeaderProps {
}

const Header: React.FunctionComponent<ILoginHeaderProps> = (props) => {
    return (
        <div className="container mb-5">
            <Navbar fixed="top" bg="light" variant="light">
            <Container>
                <Navbar.Text >
                    <h3>ESGInvested</h3>
                </Navbar.Text>  
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav defaultActiveKey="/login" as="ul">
                            <Nav.Item as="li">
                            <Link to='/' className='btn'><Nav.Link href="/login" eventKey="portfolio">Login</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/register' className='btn'><Nav.Link href="/register" eventKey="about">Register</Nav.Link></Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};


export default Header;