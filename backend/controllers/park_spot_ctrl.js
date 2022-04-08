const connection = require( "../mysql/db" );



//attribution de places / attendu(place: B2,userId:100,time:2022-04-03 01:05:00)
exports.getSpot = ( req, res, next ) => {
    connection.execute( `SELECT disponibilité FROM new_place  WHERE idnew_place=?`, [  `${ req.body.place }` ],
        function ( err, result ) {
            console.log(result)
            if ( result[0].disponibilité !== 0) {

                res.status( 400 ).json( 'place non disponible' )
            } else {
                connection.execute( `UPDATE new_place SET disponibilité=?,occupation=?  WHERE idnew_place=?`, [ `${ req.body.userId }`, `${ req.body.time }`, `${ req.body.place }` ],
                    function ( err, resulted ) {
                        if ( resulted == '' ) {

                            res.status( 400 ).json( 'erreur' )
                        } else {
                            console.log( req.body )
                            res.status( 200 ).json( "place attribué" )
                        }
                    }
                )
            }
        }
    )

    

}

//libération de la place

exports.freeThespot = ( req, res, next ) => {
    connection.execute( `SELECT timediff(now(),occupation) FROM test_tech_second.new_place WHERE disponibilité=?`, [ `${ req.body.userId }` ],
        function ( err, resulted ) {
            connection.execute( `UPDATE test_tech_second.new_place SET disponibilité=?  WHERE disponibilité=?`, [ `0`, `${ req.body.userId }` ],
                function hell ( err, result ) {
                    if ( result == '' ) {
                        res.status( 400 ).json( 'erreur' )
                    } else {
                        console.log( req.body )
                        //temps passé sur la place
                        res.status( 200 ).json( resulted[ 0 ] )
                    }
                } )
        }
    )


}


//places disponibles
exports.findEmpty = ( req, res, next ) => {
    connection.execute( `SELECT idnew_place,etage,nom_de_place FROM test_tech_second.new_place WHERE disponibilité= ?` , [ `0` ],
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
    connection.execute( `SELECT timediff(now(),occupation) FROM test_tech_second.new_place WHERE disponibilité=?`, [ `${ req.body.userId }` ],
        function ( err, result ) {
            if ( result == '' ) {
                console.log( req.body )
                res.status( 400 ).json( "cette utilisateur n'existe pas" )
            } else {
                res.status( 200 ).json( result[ 0 ] )
            }
        } )
}