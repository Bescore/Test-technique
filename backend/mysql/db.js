// get the client
const mysql = require( 'mysql2' );

// create the connection to database
const connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'carnibarge97',   //changez les logs pour vous connecter à votre base en locale
    database: 'test_tech_second',
} );

connection.connect( ( err ) => {
    if ( err ) {
        console.log( 'Erreur de connection à la base de donnée !' );
        return;
    }
    console.log( 'Base de donnée connectée !' );
} );




module.exports = connection;