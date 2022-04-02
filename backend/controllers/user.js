const connection = require( "../mysql/db" )
const bcrypt = require( 'bcrypt' );



exports.signup = ( req, res, next ) => {
    //contrôle d'entrées
    const reg_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/;
    const reg_email = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const reg_nom = /^[a-zA-Z]+$/;
    const reg_prenom = /^[a-zA-Z]+$/;
    const pass =reg_password.test( req.body.password );
    const mail =reg_email.test( req.body.email );
    const nom =reg_nom.test( req.body.nom );
    const pren =reg_prenom.test( req.body.prenom );
    if ( pass == false || mail == false || nom == false|| pren == false ) {
        res.status( 200 ).json( "mauvaises entrées" )
        console.log("mauvaises données")
    } else {
    
        bcrypt.hash( req.body.password, 10 )
            .then( response => {
                console.log( response )
                connection.execute( `INSERT INTO users(nom,prenom,mail,mdp) VALUES(?,?,?,?)`, [ `${ req.body.nom }`, `${ req.body.prenom }`, `${ req.body.email }`, `${ response }` ],
                    function ( err, result ) {
                        console.log( req.body.password );
                        res.status( 200 ).json( "mdp:créé" )

                    } )
            } )
            .catch( error => res.status( 500 ).json( { error } ) )

    };
}

exports.login = ( req, res, next ) => {

};