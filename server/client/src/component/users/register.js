import React from 'react'
import axios from '../config/axios'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Badge } from 'reactstrap';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            noticeMsg: '',
            score: null,
            type: "input"
        }
        //handle this binding  in constructor
        this.emailNameChange = this.emailNameChange.bind(this)
    }

    //es6 arrow function for event handlers where you dont have bind the this keyword

    userNameChange = (e) => {
        const username = e.target.value
        this.setState(() => ({ username }))

    }

    //regular method used for  event handlers bound in the constructor
    emailNameChange(e) {
        const email = e.target.value
        this.setState(() => ({ email }))
        // console.log(this)
    }
    //bound the this key in the method invocation
    passwordNameChange(e) {
        const password = e.target.value
        this.setState(() => ({ password }))

    }
    // passwordNameChange(e) {
    //     if (e.target.value === '') {
    //         this.setState({
    //             score: 'null'
    //         })
    //     }
    //     else {
    //         var pw = zxcvbn(e.target.value);
    //         this.setState({
    //             score: pw.score
    //         });
    //     }
    // }

    showHide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input'
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password

        }
        console.log(formData)
        //client side validations
        //TODO
        //axios.post

        axios.post('/users/register', formData)
            .then((response) => {
                console.log(response.data)
                this.setState(() => ({
                    noticeMsg: response.data.notice,
                    username: '',
                    email: '',
                    password: ''
                }))
                this.props.history.push('/users/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 5, offset: 5 }}>
                            <h2 >Registration</h2>
                            {this.state.noticeMsg && <p> {this.state.noticeMsg}</p>}
                        </Col>
                    </Row>
                </Container>
                <Form onSubmit={this.handleSubmit}>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 5 }}>
                                <FormGroup>
                                    <Label>
                                        UserName<br />
                                        <Input size="lg" type="text" value={this.state.username} onChange={this.userNameChange} />
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
                                        Email<br />
                                        <Input size="lg" type="text" value={this.state.email} onChange={this.emailNameChange} />
                                    </Label>
                                    {/* another approach to bind the this keyword is setting this while calling the function*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label className="password">
                                        Password<br />
                                        <Input size="lg" type={this.state.type} value={this.state.password} onChange={this.passwordNameChange.bind(this)} />
                                        <Badge>
                                            <span onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                                            <span color="success" data-score={this.state.score} />
                                        </Badge>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 6 }}>
                                <Button color="primary" size="sm">submit</Button>
                            </Col>
                        </Row>
                    </Container>
                    <navBar />
                </Form>
            </div>
        )

    }

}
export default Register