const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/api/accounts', async (req, res) => {
    try {
        const result = await db('accounts')
        res.status(200).json({ msg: result })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'problem with db', error: err })
    }
})

server.get('/api/accounts/:id', async (req, res) => {
    try {
        const result = await db('accounts').where({ id: req.params.id })
        res.status(200).json({ msg: result })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'problem with db', error: err })
    }
})

server.post('/api/accounts/', async (req, res) => {
    try {
        const result = await db('accounts').insert(req.body)
        res.status(200).json({ msg: result })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'problem with db', error: err })
    }
})

server.put('/api/accounts/:id', async (req, res) => {
    try {
        const result = await db('accounts').where({ id : req.params.id }).update(req.body)
        res.status(200).json({ msg: result })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'problem with db', error: err })
    }
})

server.delete('/api/accounts/:id', async (req, res) => {
    try {
        const result = await db('accounts').where({ id: req.params.id }).del()
        res.status(200).json({ msg: result })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'problem with db', error: err })
    }
})


module.exports = server;
