import * as React from 'react';
import { Investor } from '../models/investorModel';

interface ISalutationProps {
    investor: Investor
}

const Salutation: React.FunctionComponent<ISalutationProps> = ({investor}) => {
    console.log(investor.investorName);
    return (
        <h2> Happy Investing, {`${investor.investorName}`}!</h2>
    );
};

export default Salutation;
