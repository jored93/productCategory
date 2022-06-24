const express = require('express')
const router = express.Router()

const ProductsService = require('../services/products.service')
const prodservice = new ProductsService()

router.get('/', async (req, res) => {
    try {
        const products = await prodservice.find()
        res.json(products)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const product = await prodservice.findOne(id)
        res.json(product)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post('/', (req, res) => {
    const body = req.body
    const product = prodservice.create(body)
    res.json({
        message: 'Product created',
        data: product
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const product = prodservice.update(id, body)
        res.json({
            message: 'Product updated',
            data: product
        })
    } catch (error) {
        res.status(500).send(error)
    }
})


router.delete('/:id', (req, res) => {
    const id = req.params.id
    try {
        const product = prodservice.delete(id)
        res.json({
            message: 'Product deleted',
            data: id
        })
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router