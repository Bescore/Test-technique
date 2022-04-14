const express = require( 'express' );
const app = express();
const cors = require( 'cors' )
app.use( cors() )

const parkRoutes = require( './routes/park_spot' );



app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
const userRoutes = require( './routes/user_r' )



app.use( '/api/test/', parkRoutes );
app.use( '/api/auth', userRoutes );
module.exports = app;