import * as React from 'react';
import { Link } from 'react-router-dom';

interface IErrorProps {
}

const Error: React.FunctionComponent<IErrorProps> = (props) => {
    return (
        <div>
            <h2>404</h2>
            <p>Oops! Sorry, page not found</p>
            <Link to='/portfolio'>Portfolio</Link>
        </div>
    );
};

export default Error;
