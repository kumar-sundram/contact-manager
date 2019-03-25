import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './contactForm'
import axios from '../config/axios'
import { Container, Row, Col, Badge } from 'reactstrap'

class ContactNew extends React.Component {

    constructor() {
        super()
        this.handleContactSubmission = this.handleContactSubmission.bind(this)
    }

    handleContactSubmission(data) {
        axios.post('/contact', data, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const contact = response.data
                console.log('inside submit', response.data)
                this.props.history.push(`/contacts/${contact._id}`)
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
                        <Col sm="12" md={{ size: 6, offset: 5 }}>
                            <h2>Add Contact</h2>
                        </Col>
                    </Row>
                </Container>
                <ContactForm handleContactSubmission={this.handleContactSubmission} />
                <Container>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 5 }}>
                            <Badge color="dark" ><Link to="/contacts">back</Link></Badge>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContactNew