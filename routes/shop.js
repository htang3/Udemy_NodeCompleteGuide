const path = require('path');

const express = require('express');

const router = express.Router();

const shopControllers = require('../controllers/shop')


router.get('/', shopControllers.getIndex);

router.get('/products', shopControllers.getProducts);
// : signal the express to get the id as dynamic segment

// *****Add more specific route before this route productId
router.get('/products/:productId', shopControllers.getProduct)
router.get('/cart', shopControllers.getCart);
router.get('/orders', shopControllers.getOrders);
router.get('/checkout', shopControllers.getCheckout);


module.exports = router;
