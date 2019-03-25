const express = require('express')
const router = express.Router()
const { Contact } = require('../models/contact')
const { User } = require('../models/user')
const { authenticateUser } = require('../middleware/authenticate')
const { validateID } = require('../middleware/validate')

// route - fetch all contacts from db and send it to client 
router.get('/', authenticateUser, (req, res) => {
    Contact.find({
        user: req.user._id
    })
        .then((contacts) => {
            res.send(contacts)
        })
        .catch((err) => {
            res.send(err)
        })
})

// route - to create a contact 
router.post('/', authenticateUser, (req, res) => {
    const body = req.body
    const contact = new Contact(body)
    contact.user = req.user._id
    contact.save()
        .then((contact) => {
            res.send(contact)
        })
        .catch((err) => {
            res.send(err)
        })
})

// route - to get a contact 
router.get('/:id', validateID, authenticateUser, (req, res) => {
    const _id = req.params.id
    Contact.findOne({
        user: req.user._id,
        _id
    })
        .then((contact) => {
            if (contact) { // if the contact is present
                res.send(contact)
            } else { // if contact not present then value is null
                res.send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
})

// route - to delete a contact
router.delete('/:id', validateID, authenticateUser, (req, res) => {
    const _id = req.params.id
    Contact.findOneAndDelete({
        _id,
        user: req.user._id
    })
        .then((contact) => {
            if (contact) {
                res.send(contact)
            } else {
                res.send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
})

//route - to edit the contact
router.put('/:id', validateID, authenticateUser, (req, res) => {
    const id = req.params.id
    const body = req.body
    Contact.findOneAndUpdate({
        _id: id,
        user: req.user._id,
    }, { $set: body }, { new: true })
        .then((contact) => {
            res.send(contact)
        })
        .catch((err) => {
            res.send(err)
        })
})

module.exports = {
    contactsRouter: router
}