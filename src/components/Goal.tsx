import * as React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import GoalChart from './GoalChart';
import GoalChart2 from './GoalChart2';

const kDefaultState = {
    AAA:15,
        AA:15,
        A:15,
        BBB:15,
        BB:10,
        B:10,
        CCC:10,
        CC:10,
};

interface IGoalProps {
    handleGoalChangeSubmit:any;
    goalChartData:{
        AAA:number,
        AA:number,
        A:number,
        BBB:number,
        BB:number,
        B:number,
        CCC:number,
        CC:number,
        }
}

const Goal: React.FunctionComponent<IGoalProps> = ({handleGoalChangeSubmit, goalChartData}) => {

    const [goalFormData, setGoalFormData] = useState(goalChartData);

    const handleGoalChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = parseInt(event.target.value, 10);
        const fieldName = event.target.name;
        const newGoalFormData= {...goalFormData, [fieldName]:fieldValue}
        console.log('newGoalFormData: ', newGoalFormData);
        setGoalFormData(newGoalFormData);
    };

    const handleGoalSubmit = (event:any): void => {
        event.preventDefault()
    if (!goalFormData) {
        return;
    } else {
        handleGoalChangeSubmit(goalFormData)
    } ;
    };


    return (
        <div>
            <div>
                <GoalChart goalChartData={goalChartData}/>
            </div>
            <div>
                <Form className="goal-form" onSubmit={handleGoalSubmit}>
                    <Row>
                        <Col>
                            <Form.Label>Environmental</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label>Social</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label>Governance</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                            <Col>Place choose Maximal rating for each ESG Category</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>AAA</Form.Label>
                            <Form.Control onChange={handleGoalChange} name="AAA" type="text"   size="lg" placeholder="AAA" />
                        </Col>
                        <Col>
                            <Form.Label>AA</Form.Label>
                            <Form.Control onChange={handleGoalChange} name="AA" type="text"   size="lg" placeholder="AA" />
                        </Col>
                        <Col>
                            <Form.Label>A</Form.Label>
                            <Form.Control onChange={handleGoalChange} name="A"type="text"    size="lg" placeholder="A" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>BBB</Form.Label>    
                            <Form.Control onChange={handleGoalChange} name="BBB" type="text"    size="lg" placeholder="BBB" />
                        </Col>
                        <Col>
                            <Form.Label>BB</Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="BB" type="text"  size="lg" placeholder="BB" />
                        </Col>
                        <Col>
                            <Form.Label>B</Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="B" type="text"   size="lg" placeholder="B" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>CCC</Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="CCC" type="text"   size="lg" placeholder="CCC" />
                        </Col>
                        <Col>
                            <Form.Label>CC</Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="CC" type="text"   size="lg" placeholder="CC" />
                        </Col>
                    </Row>
                    <div id="space">SUBMIT YOUR GOALS</div>
                    <Button   type="submit" variant="secondary">Set Goal</Button>
                </Form>
            </div>
        </div>
        
    );
};

export default Goal;

