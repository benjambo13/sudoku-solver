import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import text from './text';

class Steps extends React.Component
{
    render() {
        return (
            <div>
                <Accordion defaultActiveKey='1'>
                    <Card>
                        <Accordion.Toggle style={toggleStyle} as={Card.Header} eventKey='1'>Step 1 - Generate the initial population</Accordion.Toggle>
                        <Accordion.Collapse eventKey='1'>
                            <Card.Body>{text[1]}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle style={toggleStyle} as={Card.Header} eventKey='2'>Step 2 - Evaulate the fitness of each solution</Accordion.Toggle>
                        <Accordion.Collapse eventKey='2'>
                            <Card.Body>{text[2]}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle style={toggleStyle} as={Card.Header} eventKey='3'>Step 3 - Selecting parents</Accordion.Toggle>
                        <Accordion.Collapse eventKey='3'>
                            <Card.Body>{text[3]}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle style={toggleStyle} as={Card.Header} eventKey='4'>Step 4 - Breed new solutions through crossover</Accordion.Toggle>
                        <Accordion.Collapse eventKey='4'>
                            <Card.Body>{text[4]}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle style={toggleStyle} as={Card.Header} eventKey='5'>Step 5 - Mutate the offspring solutions</Accordion.Toggle>
                        <Accordion.Collapse eventKey='5'>
                            <Card.Body>{text[5]}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle style={toggleStyle} as={Card.Header} eventKey='6'>Step 6 - Repeat steps 3, 4 and 5</Accordion.Toggle>
                        <Accordion.Collapse eventKey='6'>
                            <Card.Body>{text[6]}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

const toggleStyle = {
    backgroundColor: "#444b52",
    color: "white",
}

export default Steps;