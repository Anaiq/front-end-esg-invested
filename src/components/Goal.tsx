import * as React from 'react';
import Form from 'react-bootstrap/Form';


interface IGoalProps {
}

const Goal: React.FunctionComponent<IGoalProps> = (props) => {
    return (
        <Form>
            <Form.Label>Environmental</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Environmental" /> 
            <Form.Label>Social</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Social" /> 
            <Form.Label>Governance</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Governance" /> 
            <Form.Text id="percentage" muted>
                Place choose minimal rating for each  ESG Category
            </Form.Text>
        </Form>
        
    );
};

export default Goal;


