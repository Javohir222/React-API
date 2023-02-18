import React, { PureComponent } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

class Backend extends PureComponent {
        state = {
        user: []
    }
    componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(data => {
    console.log(data);
    this.setState({user: data});         
    })
    }
    render() {
        return (
          <>
            <Container>
              <Row>
                {this.state.user.map((users) => (
                  <Col md="4">
                    <Card key={users.id} className="card">
                      <CardHeader>
                        <h2 className="center">{users.name}</h2>
                      </CardHeader>
                      <CardBody>
                        <h3>📞 {users.phone}</h3>
                        <div className='users_name'>
                          <p>{users.username}</p>
                          <h4 className='users_email'>{users.email}</h4>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </>
        );
    }
}

export default Backend;