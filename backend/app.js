const express = require( 'express' );
const cors = require( 'cors' )
const app = express();

app.use( cors() )
const router = express.Router();

app.post( '/api/stuff', ( req, res, next ) => {
    console.log( req.body );
    res.status( 201 ).json( {
        message: 'Objet créé !'
    } );
} );


module.exports = router;
module.exports = app;