import React from "react";
import { Link } from 'react-router-dom';

interface ILoginHeaderProps {
}

const Header: React.FunctionComponent<ILoginHeaderProps> = (props) => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <h2>ESGInvested</h2>
                    <div className="collapse navbar-collapse " id="navbarColor02">
                        <ul className="navbar-nav me-auto ">
                        <li className="nav-item">
                            <Link to='/' className='btn'><a className="nav-link" href="/login">Login</a></Link>
                        </li>
                        <li className="nav-item ">
                        <Link to='/register' className='btn'><a className="nav-link" href="/register">Register</a></Link>
                        </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>

    );
};


export default Header;