// set up public array of global variables

module.exports =
{
    'db': 'mongodb+srv://GeidyRuiz:123@clustermanager.1eeyb.mongodb.net/products',

     ids: {
        //add data from google API
        'google': {
            clientID: '309316873040-5dg6u6228mjet3aekc020jlo889euv8a.apps.googleusercontent.com',
            clientSecret:'JFSuV9VSvgkmOh5d_RRLBU5U',
            callbackURL: 'http://localhost:3000/google/callback'
           //callbackURL: 'https://classified-ads.herokuapp.com/google/callback'
        },
        //'facebook': {
        //    clientID: '284983652946610',
        //    clientSecret: '3dff81e1932f00fe9d6cb0f5e22d89ca',
        //    callbackURL: 'http://localhost:3000/facebook/callback'
        //    //callbackURL: 'nodemon'
        //},

        /* 'github': {
             clientID: '',
             clientSecret: '',
             callbackURL: 'http://localhost:3000/github/callback'
             //callbackURL: 'nodemon'
         }*/
    }

}