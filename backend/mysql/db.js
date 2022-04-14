// get the client
const mysql = require( 'mysql2' );

// create the connection to database
const connection = mysql.createConnection( {
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b5a06d2ebb8b74',
    password: '5687dcd4',   //changez les logs pour vous connecter à votre base en locale
    database: 'heroku_81bda197c05d401',
} );

connection.connect( ( err ) => {
    if ( err ) {
        console.log( 'Erreur de connection à la base de donnée !' );
        return;
    }
    console.log( 'Base de donnée connectée !' );
} );




module.exports = connection;