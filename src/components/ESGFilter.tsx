import * as React from 'react';
import {Form} from 'react-bootstrap';

interface IESGFilterProps {
}

const ESGFilter: React.FunctionComponent<IESGFilterProps> = (props) => {
    return (
        <Form.Select aria-label="ESG Category Filter">
            <option>Choose ESG Category</option>
            <option value="Environment">Environment</option>
            <option value="Social">Social</option>
            <option value="Governance">Governance</option>
        </Form.Select>
    );
};

export default ESGFilter;
