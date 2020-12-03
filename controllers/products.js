//Geidy Ducuara Ruiz - 200419082
//link to the express package
var express = require('express');
//instanciate a new express route to handle http request
var router = express.Router();

//Reference the product model
const Product = require('../models/product')

//Use Passport to Check our Auth
const passport = require('passport');

//Auth check function to be called for each route
function isLoggedIn(req, res, next) {
    //If user has logged ini, call next which will just continue execution
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

/* GET Product Index view. */
//use the product model to fetch a lists of product and pass these to view for display

router.get('/', isLoggedIn, (req, res, next) => {

    Product.find((err, products) => {
        //if an error occurs, the error parameter will filled
        if (err) {
            console.log(err)
            res.end(err)
        }
        //else, the product parameter will be filled with the query result
        else {
            res.render('products/index',
                {
                    products: products,
                    user: req.user
                })
        }
    })
})


//GET product add view
router.get('/add',isLoggedIn,(req, res, next) => {
    res.render('products/add',{
        user: req.user
    })
})
//POST products / add for submission
router.post('/add',isLoggedIn, (req, res, next) => {
    //use Mongoose to try to save a new object
    Product.create({
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        usedProduct: req.body.usedProduct
    }, (err, products) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/products')
        }
    })
})

//GET products/delete/ - colon in the path represents a URL parameter
router.get('/delete/:_id',isLoggedIn,(req, res, next) => {
    //store the selected id in a local variable
    var _id = req.params._id;
    //Use Mongoose to delete the selected document from the DB
    Product.remove({ _id: _id }, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/products')
        }

    })
})



//GET product/ edit/.. populate edit for with my existing product values

router.get('/edit/:_id',isLoggedIn,(req, res, next) => {
    //store the selected id in a local variable
    var _id = req.params._id;
    //use this selected id to look up the matching document
    Product.findById(_id, (err, products) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('products/edit',
                {
                    products: products,
                    user: req.user
            
                })
        }
    })
})
//POST  product/ edit/:_id -> update selected document
router.post('/edit/:_id', isLoggedIn,(req, res, next) => {
    var _id = req.params._id
    //parse checkbox to bool
    let usedProduct = false
    if (req.body.usedProduct == "on")
    {
        usedProduct = true
    }
       
    console.log('Used Product: ' + req.body.usedProduct)
    //instatiate a product Object with the new values from the submission
    var product = new Product({
        _id: _id,
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        usedProduct: usedProduct
    })
    Product.update({ _id: _id }, product, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/products')
        }
    })
})


//express this file as public
module.exports = router;