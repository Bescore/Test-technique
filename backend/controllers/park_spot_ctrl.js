const connection = require( "../mysql/db" );



//attribution de places / attendu(place: B2,userId:100,time:2022-04-03 01:05:00)
exports.getSpot = ( req, res, next ) => {
    connection.execute( `SELECT disponibilité FROM new_place  WHERE nom_de_place=?`, [ `${ req.body.place }` ],
        function ( err, result ) {
            if ( !result[ 0 ] ) {
                res.status( 200 ).json( 'erreur' )
            } else {
                if ( result[ 0 ].disponibilité != 0 ) {

                    res.status( 200 ).json( 'place non disponible' )
                } else {
                    connection.execute( `UPDATE new_place SET disponibilité=?,occupation=now()  WHERE nom_de_place=?`, [ `${ req.body.userId }`, `${ req.body.place }` ],
                        function ( err, resultat ) {
                            if ( resultat == '' ) {

                                res.status( 400 ).json( 'erreur' )
                            } else {

                                res.status( 200 ).json( "place attribuée" )
                            }
                        }
                    )
                }
            }
        }
    )



}

//libération de la place

exports.freeThespot = ( req, res, next ) => {
    connection.execute( `SELECT timediff(now(),occupation) FROM new_place WHERE disponibilité=?`, [ `${ req.body.userId }` ],
        function ( err, resulted ) {
            connection.execute( `UPDATE new_place SET disponibilité=?  WHERE disponibilité=?`, [ `0`, `${ req.body.userId }` ],
                function hell ( err, result ) {
                    if ( result == '' ) {
                        res.status( 400 ).json( 'erreur' )
                    } else {
                        connection.execute( `INSERT INTO payment(durée,utilisateur,spot) VALUES(?,?,?)`, [ Object.values(resulted[0])[0], `${ req.body.userId }`,`${ req.body.spot }` ],
                            function ( err, resulting ) {
                                res.status( 200 ).json( resulting )
                            } )
                    }
                } )
        }
    )


}


//places disponibles
exports.findEmpty = ( req, res, next ) => {
    connection.execute( `SELECT idnew_place,etage,nom_de_place FROM new_place WHERE disponibilité= ?`, [ `0` ],
        function ( err, result ) {

            if ( result == '' ) {

                res.status( 400 ).json( 'erreur, parking plein' )
            } else {
                res.status( 200 ).json( result )
            }

        } )
}

//places disponibles par étages
exports.findEmptyby_floor = ( req, res, next ) => {
    connection.execute( `SELECT idnew_place,etage,nom_de_place FROM new_place WHERE disponibilité= ? AND etage=?`, [ `0`, `${ req.body.etage }` ],
        function ( err, result ) {

            if ( result == '' || req.body.etage == null ) {

                res.status( 400 ).json( 'mauvaises entrées' )
            } else {
                res.status( 200 ).json( result )
            }

        } )
}






//durée d'occupation/ attendu (userId)
exports.timeRemaining = ( req, res, next ) => {
    connection.execute( `SELECT durée,spot FROM payment WHERE utilisateur=?`, [ `${ req.query.userId }` ],
        function ( err, result ) {
            if ( result == '' ) {

                res.status( 400 ).json( "existe pas" )
                
            } else {
                res.status( 200 ).json( result )
            }
        } )
}

//cette route va vérifier si l'utilisateur a déjà un véhicule garé.
exports.amIparked = ( req, res, next ) => {
    connection.execute( `SELECT * FROM new_place WHERE disponibilité=?`, [ `${ req.body.userId }` ],
        function ( err, result ) {
            if ( result == '' ) {

                res.status( 200 ).json( "no" )
            } else {
                res.status( 200 ).json( "yes" )
            }

        } )
}