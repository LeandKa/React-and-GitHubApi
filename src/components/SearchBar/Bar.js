import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

const options = [
    { value: '', label: 'select' },
    { value: 'node', label: 'NodeJs' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'c', label: 'C#' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'javascript', label: 'JavaScript' }
];
const selectDesc = [
    { value: '', label: 'select' },
    { value: 'forks', label: 'Forks' },
    { value: 'stars', label: 'Stars' },
    { value: 'updated', label: 'Recently update' },
];

const style = {
    marginTop:'32px'
}

export default class Bar extends Component {


    render() {
        return (
            <Container >
                <Form onSubmit={this.props.onSubmit}>
                    <Row >
                        <Col>
                            <InputGroup>
                                <Form.Control style={style}
                                    placeholder="Type a name here"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name="search"
                                    onChange={this.props.onChange} />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.Label>Languages</Form.Label>
                            <Form.Control as="select" name="selectLan" onChange={this.props.onChange} custom>
                                {
                                    options.map((option, index) => {
                                        return (<option key={index} value={option.value}>{option.label}</option>)
                                    })
                                }
                            </Form.Control></Col>
                        <Col>
                            <Form.Label>Order</Form.Label>
                            <Form.Control as="select" name="selectDesc" onChange={this.props.onChange} custom>
                                {
                                    selectDesc.map((option, index) => {
                                        return (<option key={index} value={option.value}>{option.label}</option>)
                                    })
                                }
                            </Form.Control></Col>
                            <Col><Button style={style} variant="outline-secondary" type="submit">Search...</Button></Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}
