const express = require('express')
const router = express.Router()

let categories = [
    {id: 1, name: 'Electronics', description: 'All Electronics'},
    {id: 2, name: 'Books', description: 'All Books'},
    {id: 3, name: 'Clothing', description: 'All Clothing'}
]

const getCategories = () => {
    return new Promise((resolve, reject) => {
        if (categories.length > 0) {
            setTimeout(() => {
                resolve(categories)
            }, 1000)
        } else {
            reject(new Error('No categories found'))
        }
    })
}

router.get('/', async (req, res) => {
    try {
        const categories = await getCategories()
        res.send(categories)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router