import React from 'react'
import axios from '../config/axios'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            hidden: true,
            redirectList: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //creating one event handler for all Input field - for this to work, name prop is important
    // regular you will still need to bind the this keyword

    handleChange(e) {
        //console.log(e.target.name, e.target.value)
        e.persist()

        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        //client side validation

        axios.post('/users/login', formData)
            .then((response) => {
                const { token } = response.data
                localStorage.setItem('token', token)
                this.setState(() => ({
                    email: '',
                    password: '',
                    redirectList: true
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        if (this.state.redirectList) {
            return <Redirect to="/contacts" />
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 5 }}>
                            <h2>Login</h2>
                        </Col>
                    </Row>
                </Container>

                <Form onSubmit={this.handleSubmit}>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 5 }}>
                                <FormGroup>
                                    <Label>
                                        Email<br />
                                        <Input size="lg" type='text' value={this.state.email} onChange={this.handleChange} name="email" />
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 5 }}>
                                <FormGroup>
                                    <Label>
                                        Password<br />
                                        <Input size="lg" type={this.state.hidden ? "password" : "text"} value={this.state.password} onChange={this.handleChange} name="password" />
                                        <Button onClick={this.toggleShow}>Show/Hide</Button>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 6 }}>
                                <Button color="primary" size="sm">Submit</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        )

    }

}
export default Login