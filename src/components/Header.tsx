import React from "react";
import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import "./Header.css";
import { Interface } from "readline";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface IHeaderProps {

}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                <img className="esg-logo" src="/esg_logo.png" alt="tree,scale,money logo"></img>
                </Navbar.Brand>
                <Navbar.Brand>
                    ESG Invested
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};


export default Header;