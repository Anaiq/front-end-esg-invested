import * as React from 'react';
import {Form} from 'react-bootstrap';

interface IESGRatingsFilterProps {
}

const ESGRatingsFilter: React.FunctionComponent<IESGRatingsFilterProps> = (props) => {
    return (
        <Form.Select aria-label="ESG Ratings Filter">
            <option>ESG Ratings Filter</option>
            <option value="AAA">AAA</option>
            <option value="AA-A">AA</option>
            <option value="A">A</option>
            <option value="BBB">BBB</option>
            <option value="BB">BB</option>
            <option value="B">B</option>
            <option value="CCC">CCC</option>
            <option value="CC">CC</option>
        </Form.Select>
    );
};

export default ESGRatingsFilter;