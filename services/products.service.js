let products = [
    {id:1,  name: 'Iphone', price: '1000', category: 1},
    {id:2, name: 'Samsung', price: '2000', category: 1},
    {id:3, name: 'Xiaomi', price: '3000', category: 1},
    {id:4, name: 'Sherlock', price: '4000', category: 2},
]

class ProductsService {

    constructor(){
        this.products = products
    }

    create(data){
        const product = {
            id: products.length + 1,
            ...data
        }
        this.products.push(product)
        return product
        
    }

    find(){
        return new Promise((resolve, reject) => {
            if (products.length > 0) {
                setTimeout(() => {
                    resolve({
                        message: 'Products found',
                        data: products
                    })
                }, 1000)
            } else {
                reject(new Error('No products found'))
            }
        })
    }

    findOne(id){
        return new Promise((resolve, reject) => {
            const product = products.find(p => p.id === parseInt(id))
            console.log(product)
            if (product.length > 0) {
                setTimeout(() => {
                    resolve({
                        message: 'Product found',
                        data: product
                    })
                }, 1000)
            } else {
                reject(new Error('No products found'))
            }
        })
    }

    update(id, data){
        const index = products.findIndex(p => p.id === parseInt(id))
        if (index === -1) {
            throw new Error('Product not found')
        }
        const product = {
            id: id,
            ...data
        }
        this.products[index] = product
        return product
    }


    delete(id){
        const index = products.findIndex(p => p.id === parseInt(id))
        if (index === -1) {
            throw new Error('Product not found')
        }
        this.products.splice(index, 1)
        return { id: id }
    }

}

module.exports = ProductsService