import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class ListItem extends Component {

    render() {

        const result = this.props.isList
        const isSearch = this.props.isSearchAux


    if(!isSearch){
        return(
            <div>
            <Container>
              <Row>
                   {result.map(res=>(
                  <Col md={3} key={res.id}>
                  <div>
                <Card style={{maxWidth:'13rem', marginTop:'10px'}}>
                    <Card.Img variant="top" src={res.owner.avatar_url} />
                    <Card.Body>
                    <Card.Title>{res.name}</Card.Title>
                     <Card.Text>User: {res.owner.login}</Card.Text>
                     <Card.Text>Forks:{res.forks_count}</Card.Text>
                     <Card.Text>Watchers:{res.watchers}</Card.Text>
                     <Button variant="outline-secondary" href={res.html_url}>Go to the Repository</Button>    
                     </Card.Body>
                 </Card>
                </div>
                  </Col>
               ))}
              </Row>
            </Container>
        </div>
        )
    }else{
        return(
            <div>
            <Container>
              <Row>
                   {result.map(res=>(
                  <Col md={3} key={res.id}>
                  <div>
                <Card style={{maxWidth:'13rem', marginTop:'10px'}}>
                    <Card.Img variant="top" src={res.owner.avatar_url} />
                    <Card.Body>
                    <Card.Title>{res.name}</Card.Title>
                     <Card.Text>User: {res.owner.login}</Card.Text>
                     <Card.Text>Forks:{res.forks_count}</Card.Text>
                     <Card.Text>Watchers:{res.watchers}</Card.Text>
                     <Button variant="outline-secondary" href={res.html_url}>Go to the Repository</Button>    
                     </Card.Body>
                 </Card>
                </div>
                  </Col>
               ))}
              </Row>
            </Container>
        </div>
        )
    }
    }
}
