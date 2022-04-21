const connection = require( "../mysql/db" );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );




exports.signup = async ( req, res, next ) => {
    //vérification d'entrées
    const reg_password = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/; //un mot de passe avec une majuscule,minuscule, un caractère spéciale, un chiffre, sans espace
    const reg_email = /^[a-zA-Z0-9._%-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/;//n'accepte que les emails régulière
    const reg_nom = /^[a-zA-Z]+$/;//nom sans espace et sans caractère spéciale
    const reg_prenom = /^[a-zA-Z]+$/;
    const pass = reg_password.test( req.body.password );
    const mail = reg_email.test( req.body.email );
    const nom = reg_nom.test( req.body.nom );
    const pren = reg_prenom.test( req.body.prenom );
    if ( pass == false || mail == false || nom == false || pren == false ) {
        res.status( 200 ).json( "mauvaises entrées" )
    } else {
        const hashed = await bcrypt.hash( req.body.password, 10 )

        connection.execute( `INSERT INTO users(nom,prenom,mail,mdp,active) VALUES(?,?,?,?,?)`, [ `${ req.body.nom }`, `${ req.body.prenom }`, `${ req.body.email }`, `${ hashed }`, `1` ],
            function ( err, result ) {
                if ( err ) {
                    res.status( 200 ).json( "adresse présente dans la base" )
                } else {
                    console.log( result )
                    res.status( 200 ).json( {
                        token: jwt.sign(
                            { userdId: result.insertId }, 'RANDOM_TOKEN_SECRET', { expiresIn: '1800s' } ),
                        userId: result.insertId
                    } )
                }
            } )
    }
}
exports.login = ( req, res, next ) => {
    //verification d'entrées
    const reg_password = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    const reg_email = /^[a-zA-Z0-9._%-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/;
    const pass = reg_password.test( req.body.password );
    const mail = reg_email.test( req.body.email );
    if ( pass === false || mail === false ) {

        res.status( 400 ).json( "mauvaises entrées" )
        console.log( "mauvaises données" )
    } else {
        connection.execute( `SELECT mail,mdp,idusers FROM users WHERE mail=?`, [ `${ req.body.email }` ],
            function ( err, result ) {
                if ( err ) {
                    console.log(err)
                }
                if ( result == '' ) {
                    console.log( "pas de resultat" )
                    res.status( 400 ).json( 'erreur, adresse non disponible dans la base' )
                } else {
                    bcrypt.compare( req.body.password, result[ 0 ].mdp )
                        .then( valid => {
                            if ( !valid ) {
                                return res.status( 401 ).json( { error: "mot de passe inccorect" } );
                            }
                            res.status( 200 ).json( {
                                userId: result[ 0 ].idusers,
                                token: jwt.sign(
                                    { userdId: result[ 0 ].idusers }, 'RANDOM_TOKEN_SECRET', { expiresIn: '1800s' }
                                )
                            } )
                        } )
                        .catch( error => res.status( 500 ).json( { error } ) );
                    console.log( result )

                }
            }
        )
    }
};

//affichage infos  compte utilisateur 

exports.getMyinfos = ( req, res, next ) => {
    //necessite le hash dans la base et l'userId
    connection.execute( `SELECT * FROM users WHERE idusers=? `, [ `${ req.body.userId }` ],
        function ( err, result ) {
            res.status( 200 ).json( result )
        }
    )
}

//afficher les informations de la place acquise par l'utilisateur

exports.getMySpotInfos = ( req, res, next ) => {
    connection.execute( `SELECT * FROM new_place C,users U WHERE C.disponibilité=? AND u.idusers=?`, [ `${ req.body.userId }`,`${ req.body.userId }` ],
    function ( err, resulted ) {
        res.status( 200 ).json( resulted )
    }
)
}


//changer les informations utilisateurs

exports.changeMyinfos = ( req, res, next ) => {
    //verification des entrées
    const reg_email = /^[a-zA-Z0-9._%-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/;
    const reg_nom = /^[a-zA-Z- ]+$/
    const reg_prenom = /^[a-zA-Z- ]+$/
    const mail = reg_email.test( req.body.email );
    const nom = reg_nom.test( req.body.nom );
    const pren = reg_prenom.test( req.body.prenom );
    if ( nom == false || mail == false || pren == false ) {
        res.status( 401 ).json( "mauvaises entrées" )
        console.log( "mauvaises données" )
    } else {
        connection.execute( `UPDATE users SET  nom=?,prenom=?,mail=? WHERE idusers=? AND mdp=?`, [ `${ req.body.nom }`, `${ req.body.prenom }`, `${ req.body.email }`, `${ req.body.userId }`, `${ req.body.hash }` ],
            function ( err, result ) {
                console.log( req.body )
                res.status( 200 ).json( "informations changées" )
            }
        )
    }
}