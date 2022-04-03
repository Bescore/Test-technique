const express = require( 'express' );
const cors = require( 'cors' )
const app = express();
const parkRoutes = require( './routes/park_spot' );


app.use( cors() )
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
const userRoutes=require('./routes/user_r')



app.use( '/api/test', parkRoutes );
app.use( '/api/auth', userRoutes );
module.exports = app;