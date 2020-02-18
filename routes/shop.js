const path = require('path');

const express = require('express');

const router = express.Router();

const shopControllers = require('../controllers/shop')


router.get('/', shopControllers.getIndex);

router.get('/products', shopControllers.getProducts);

router.get('/cart', shopControllers.getCart);

router.get('/checkout', shopControllers.getCheckout);


module.exports = router;
