import React from 'react'
import axios from '../config/axios';
import ContactForm from './contactForm'
import { Container, Row, Col } from 'reactstrap'

class ContactEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            contact: {},
            isLoaded: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/contact/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const contact = response.data
                this.setState(() => ({ contact, isLoaded: true }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleContactSubmission = (formData) => {
        axios.put(`/contact/${this.state.contact._id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const contact = response.data
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
                            <h2>edit contact</h2>
                        </Col>
                    </Row>
                </Container>
                {this.state.isLoaded && <ContactForm name={this.state.contact.name} email={this.state.contact.email} mobile={this.state.contact.mobile} handleContactSubmission={this.handleContactSubmission} />}
            </div>
        )
    }
}

export default ContactEdit