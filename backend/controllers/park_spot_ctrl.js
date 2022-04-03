const connection = require( "../mysql/db" );



//attribution de places / attendu(place: B2,userId:100)
exports.getSpot = ( req, res, next ) => {

    connection.execute( `UPDATE test_tech_second.place_park SET disponibilité=?,occupation=?  WHERE idplace_park=?`, [ `${ req.body.userId }`, `${ req.body.time }`,`${req.body.place}` ],
        function ( err, result ) {
            if ( result == '' ) {
                
                res.status( 400 ).json( 'erreur' )
            } else {
                console.log( req.body )
                res.status( 200 ).json( "place attribué" )
            }
        } )

}

//libération de la place

exports.freeThespot = ( req, res, next ) => {
    connection.execute( `SELECT timediff(now(),occupation) FROM test_tech_second.place_park WHERE disponibilité=?`, [ `${ req.body.userId }` ],
        function ( err, resulted ) {
            connection.execute( `UPDATE test_tech_second.place_park SET disponibilité=?  WHERE disponibilité=?`, [ `0`, `${ req.body.userId }` ],
                function hell( err, result ) {
                    if ( result == '' ) {

                        res.status( 400 ).json( 'erreur' )
                    } else {
                        //temps passé sur la place
                        console.log( req.body )
                        res.status( 200 ).json( resulted[0] )
                    }
                } )
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
//durée d'occupation/ attendu (userId)
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