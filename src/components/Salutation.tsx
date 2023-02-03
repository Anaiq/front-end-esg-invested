import * as React from 'react';
import { Investor } from '../models/investorModel';

interface ISalutationProps {
    investor?: Investor
}

const Salutation: React.FunctionComponent<ISalutationProps> = ({investor}) => {
    return (
        <h2> Happy Investing, {investor ? `, ${investor.investorName}` : "Investor"}!</h2>
    );
};

export default Salutation;
