import * as React from 'react';
import Goal from './Goal';
import Button from 'react-bootstrap/Button'

interface IGoalListProps {
}

const GoalList: React.FunctionComponent<IGoalListProps> = (props) => {
    return (
        <section>
            <h2> Goal List</h2>
                <Goal />
                <Button as="input" type="submit" value="submit" variant="secondary"></Button>
        </section>
    );
};

export default GoalList;
