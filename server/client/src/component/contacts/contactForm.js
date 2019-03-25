import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name ? props.name : '',
            email: props.email ? props.email : '',
            mobile: props.mobile ? props.mobile : ''
        }
    }

    nameHandle = (e) => {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    emailHandle = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    mobileHandle = (e) => {
        const mobile = e.target.value
        this.setState(() => ({ mobile }))
    }

    submitHandle = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.handleContactSubmission(formData)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandle}>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 5 }}>
                                <FormGroup>
                                    <Label>
                                        Name<br />
                                        <Input size="lg" type="text" value={this.state.name} placeholder="write name here" onChange={this.nameHandle} />
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
                                        Email <br />
                                        <Input size="lg" type="text" value={this.state.email} placeholder="write email id here" onChange={this.emailHandle} />
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
                                        Mobile<br />
                                        <Input size="lg" type="text" value={this.state.mobile} placeholder="write mobile number here" onChange={this.mobileHandle} />
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 5 }}>
                                <Button color="primary" size="sm">Submit</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        )
    }
}

export default ContactForm