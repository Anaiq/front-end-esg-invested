import React from "react";
import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import "./Header.css";
import { Interface } from "readline";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface IHeaderProps {

}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
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
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                            <Link to='/' className='btn'><Nav.Link href="/home">Home</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/about' className='btn'><Nav.Link eventKey="about">About</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/esg-goal-planner' className='btn'><Nav.Link eventKey="esg-goal-planner">ESG Goal Planner</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/about' className='btn'><Nav.Link eventKey="invest">Invest</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/about' className='btn'><Nav.Link eventKey="Transactions">Transactions</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/about' className='btn'><Nav.Link eventKey="logout">Logout</Nav.Link></Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header;