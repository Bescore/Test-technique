const connection = require( "../mysql/db" );


exports.findEmpty = ( req, res, next ) => {
    connection.execute( `SELECT * FROM test_tech_second.place_park WHERE disponibilité= ?`, [ `0` ],
        function ( err, result ) {
            if ( result == '' ) {
                console.log( req.body )
                res.status( 400 ).json( 'erreur, parking plein' )
            } else {
                res.status( 200 ).json( result )
            }
        } )
}