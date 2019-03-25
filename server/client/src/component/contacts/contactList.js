import React from 'react'
import axios from '../config/axios'
import { Link } from 'react-router-dom'
import { Badge } from 'reactstrap'

class ContactList extends React.Component {
    constructor() {
        super()
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        axios.get('/contact', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const contacts = response.data
                this.setState({
                    contacts
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h2>Listing Contacts - {this.state.contacts.length}</h2>
                <ul>
                    {this.state.contacts.map((contact) => {
                        return <li key={contact._id}><Link to={`/contacts/${contact._id}`}>{contact.name}</Link> - {contact.mobile}</li>
                    })}
                </ul>
                <Badge color="dark"><Link to="/contacts/new">Add Contact</Link></Badge>
            </div>
        )
    }
}

export default ContactList