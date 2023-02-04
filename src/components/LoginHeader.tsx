import React from "react";
import { useEffect, useState } from 'react';
import "./Header.css";
import { Interface } from "readline";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface ILoginHeaderProps {
}

const Header: React.FunctionComponent<ILoginHeaderProps> = (props) => {
    return (
        <Navbar   fixed="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                <img  src="images/esg_logo.png" alt="tree,scale,money logo" width="80" height="40"  className="d-inline-block align-top">
                </img>
                ESG Invested
                </Navbar.Brand> 
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav defaultActiveKey="/login" as="ul">
                            <Nav.Item as="li">
                            <Link to='/login' className='btn'><Nav.Link href="/login" eventKey="portfolio">Login</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/register' className='btn'><Nav.Link href="/register" eventKey="about">Register</Nav.Link></Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header;