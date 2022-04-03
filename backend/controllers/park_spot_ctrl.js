const connection = require( "../mysql/db" );



//attribution de places
exports.getSpot = ( req, res, next ) => {

    connection.execute( `UPDATE test_tech_second.place_park SET disponibilité=?  WHERE idplace_park=?`, [  `${req.body.userId }`,`${req.body.place}` ],
        function ( err, result ) {
            if ( result == '' ) {
                
                res.status( 400 ).json( 'erreur' )
            } else {
                console.log( req.body )
                res.status( 200 ).json( "place attribué" )
            }
        } )

}




//places disponibles
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
//durée d'occupation
exports.timeRemaining = ( req, res, next ) => {
    connection.execute( `SELECT timediff(now(),occupation) FROM test_tech_second.place_park WHERE disponibilité=?`, [ `${req.body.userId}` ],
        function ( err, result ) {
            if ( result == '' ) {
                console.log( req.body )
                res.status( 400 ).json( "cette utilisateur n'existe pas" )
            } else {
                res.status( 200 ).json( result[0] )
            }
        } )
}