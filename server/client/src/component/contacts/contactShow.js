import React from "react"
import axios from '../config/axios'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class ContactShow extends React.Component {
    constructor() {
        super()
        this.state = {
            contact: {}
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
                this.setState(() => ({ contact }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleDelete = () => {
        const confirmDelete = window.confirm('are you sure?')
        if (confirmDelete) {
            axios.delete(`/contact/${this.state.contact._id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
                .then((response) => {
                    this.props.history.push('/contacts')
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }

    render() {
        return (
            <div>
                <h2>{this.state.contact.name}</h2>
                <p>{this.state.contact.email} -{this.state.contact.mobile} </p>

                <Link to={`/contacts/edit/${this.state.contact._id}`}>edit</Link>  |  <Link to="/contacts">back</Link><br /><br />
                <Button color="danger" onClick={this.handleDelete}>delete</Button>

            </div>
        )
    }
}

export default ContactShow