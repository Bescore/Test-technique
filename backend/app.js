require('dotenv').config()
const express = require( 'express' );
const app = express();
app.use( ( req, res, next ) => {
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    res.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' );
    res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS' );
    next();
} );

const parkRoutes = require( './routes/park_spot' );



app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
const userRoutes = require( './routes/user_r' )



app.use( '/api/test/', parkRoutes );
app.use( '/api/auth', userRoutes );
module.exports = app;