const fs = require('fs');
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

//helper functions
const getProductFromFile = (callback) => {

    //asynchronuous code
    fs.readFile(p, (err, data) => {
        if (err) {
            return callback([])
        }
        else {
            // return data as Json 
            callback(JSON.parse(data))
        }
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    // save method to store array products
    save() {
        getProductFromFile(products => {
            products.push(this);
            // we use this here because to ensure it refers to a class
            // stringify turn the string to Json
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        });
    }

    // static help call this method direct from the class itself
    static fetchAll(callback) {
        getProductFromFile(callback)
    }
}