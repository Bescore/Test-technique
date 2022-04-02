const connection = require( "../mysql/db" );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );




exports.signup = async ( req, res, next ) => {
    //contrôle d'entrées
    const reg_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/;
    const reg_email = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const reg_nom = /^[a-zA-Z]+$/;
    const reg_prenom = /^[a-zA-Z]+$/;
    const pass = reg_password.test( req.body.password );
    const mail = reg_email.test( req.body.email );
    const nom = reg_nom.test( req.body.nom );
    const pren = reg_prenom.test( req.body.prenom );
    if ( pass == false || mail == false || nom == false || pren == false ) {
        res.status( 200 ).json( "mauvaises entrées" )
        console.log( "mauvaises données" )
    } else {
        const hashed = await bcrypt.hash( req.body.password, 10 )
        connection.execute( `INSERT INTO users(nom,prenom,mail,mdp) VALUES(?,?,?,?)`, [ `${ req.body.nom }`, `${ req.body.prenom }`, `${ req.body.email }`, `${ hashed }` ],
            function ( err, result ) {
                res.status( 200 ).json( "compte créé" )
            } )



    };
}

exports.login = ( req, res, next ) => {

    const reg_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/;
    const reg_email = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const pass = reg_password.test( req.body.password );
    const mail = reg_email.test( req.body.email );
    if ( pass == false || mail == false ) {

        res.status( 401 ).json( "mauvaises entrées" )
        console.log( "mauvaises données" )
    } else {
        connection.execute( `SELECT mail,mdp,idusers FROM users WHERE mail=?`, [ `${ req.body.email }` ],
            function ( err, result ) {
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
                                    { uerdId: result[ 0 ].idusers},'RANDOM_TOKEN_SECRET',{expiresIn:'1800s'}
                                )
                            } )
                        } )
                        .catch( error => res.status( 500 ).json( { error } ) );
                    console.log( result )
                
                }
            } )
    }
};