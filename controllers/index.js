//Geidy Ducuara Ruiz - 200419082
var express = require('express');
var router = express.Router();

//ref for Auth
const passport = require('passport')
const User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'products',
        user: req.user
    });
});

/* GET ads page. */
router.get('/ads', function (req, res, next) {
    res.render('', {
        title: 'Classified Ad ',
        user: req.user
    });
});

////GET /register
//router.get('/register', (req, res, next) => {
//    res.render('register')
//})

router.get('/register', (req, res, next) => {
    //Check for Invalid password message and pass to the view to display
    let messages = req.session.messages || []

    //Clear the Session Message
    req.session.messages = []
    //Pass Local Message variable to the view for display
    res.render('register', {
        messages: messages
    })
})
//POST /Register
router.post('/register', (req, res, next) => {
    //Use the User model with passport to try a new user
    //passport-local-mongoose will salt and has password
    User.register(new User({
        username: req.body.username
    }), req.body.password, (err, user) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            //Log the User in and redirect to /tasks
            req.login(user, (err) => {
                res.redirect('/products')
            })
        }
    })
})


//GET/login
router.get('/login', (req, res, next) => {
    //Check for Invalid Login message and pass to the view to display
    let messages = req.session.messages || []

    //Clear the Session Message
    req.session.messages = []
    //Pass Local Message variable to the view for display
    res.render('login', {
        messages: messages
    })
})

//POST /Login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/login',
    failureMessage: 'Invalid Login'
}))

//GET /Logout
router.get('/logout', (req, res, next) => {
    //Call passport built-in logout method
    req.logout()
    res.redirect('/login')
})

// GET / Google /
// Check if the User is already logged into/with Google, if not invoke then Google Signing
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}),
    (req, res) => { })

//Get / google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/login'
}),
    (req, res) => {
        res.redirect('/products')
    })

//// GET / Facebook/
//// Check if the User is already logged into/with Facebook, if not invoke then Facebook Signin
//router.get('/facebook', passport.authenticate('facebook'),
//    (req, res) => { }
//)

////Get / facebook/callback
//router.get('/facebook/callback', passport.authenticate('facebook', {
//    failureRedirect: '/login'
//}),
//    (req, res) => {
//        res.redirect('/products')
//    })


module.exports = router;
