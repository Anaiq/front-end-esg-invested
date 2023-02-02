import * as React from 'react';
import Form from 'react-bootstrap/Form';


interface IGoalProps {
}

const Goal: React.FunctionComponent<IGoalProps> = (props) => {
    return (
        <section>
            <h2>ESG Goals</h2>
                <Form.Control type="text" placeholder="Environmental" /> <span> %</span>
                <Form.Control type="text" placeholder="Social" /> <span> %</span>
                <Form.Control type="text" placeholder="Governance" /> <span> %</span>
        </section>
        
    );
};

export default Goal;