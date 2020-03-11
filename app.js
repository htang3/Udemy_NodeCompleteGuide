const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express(); //app is express application

const errorController = require('./controllers/404')
//global value, setting the pug
app.set('view engine', 'ejs');
app.set('views', 'views')


const adminRoute = require('./routes/admin');
const shopeRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false })); //register some middleware and call next in the end
app.use(express.static(path.join(__dirname, 'public'))); //for render static file css or js

app.use('/admin', adminRoute);
app.use(shopeRoutes);

app.use(errorController.get404)

app.listen(3000);