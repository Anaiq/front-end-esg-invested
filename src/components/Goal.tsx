import * as React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import GoalChart from './GoalChart';
import GoalChart2 from './Goalchart2';

interface IGoalProps {
}

const Goal: React.FunctionComponent<IGoalProps> = (props) => {
// display goalchart one as default and change to goalchart2 on button click
    return (
        <div>
            <div>
                <GoalChart/> 
                <GoalChart2/>
            </div>
            <div>
                <Form>
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
                        <Form.Control type="text"   size="lg" placeholder="AAA" />
                    </Col>
                    <Col>
                        <Form.Label>AA</Form.Label>
                        <Form.Control type="text"   size="lg" placeholder="AA" />
                    </Col>
                    <Col>
                        <Form.Label>A</Form.Label>
                        <Form.Control type="text"    size="lg" placeholder="A" />
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Label>BBB</Form.Label>    
                        <Form.Control type="text"    size="lg" placeholder="BBB" />
                    </Col>
                    <Col>
                        <Form.Label>BB</Form.Label> 
                        <Form.Control type="text"  size="lg" placeholder="BB" />
                    </Col>
                    <Col>
                        <Form.Label>B</Form.Label> 
                        <Form.Control type="text"   size="lg" placeholder="B" />
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Label>CCC</Form.Label> 
                        <Form.Control type="text"   size="lg" placeholder="CCC" />
                    </Col>
                    <Col>
                        <Form.Label>CC</Form.Label> 
                        <Form.Control type="text"   size="lg" placeholder="CC" />
                    </Col>
                    </Row>
                    <Button as="input" type="submit" value="submit" variant="secondary"></Button>
                </Form>
            </div>
        </div>
        
    );
};

export default Goal;

