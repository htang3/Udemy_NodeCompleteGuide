const Product = require('../models/product')
exports.getProducts = (req, res, next) => {
    // const product = adminData.product;
    // console.log("shop.js", adminData.product);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prod: products,
            pageTitle: "All Products",
            path: '/products',

            // layout: false
        });
    });

}

exports.getProduct = (req, res, next) => {
    // we use productId because in routes/shop.js. we has productId as params
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        console.log("here", product);
    })
    res.redirect('/')
}
// Get admin list products
exports.getIndex = (req, res, next) => {
    // const product = adminData.product;
    // console.log("shop.js", adminData.product);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prod: products,
            pageTitle: "Shop Ejs",
            path: '',

        });
    });

}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    })
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'checkout',
        path: '/checkout'
    })
}