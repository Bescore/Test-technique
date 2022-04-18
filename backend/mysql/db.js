// get the client
const mysql = require( 'mysql2' );

// create the connection to database
const connection = mysql.createConnection( {
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b8c3fcd9d7fdea',
    password: 'c6136b2a',   //changez les logs pour vous connecter à votre base en locale
    database: 'heroku_8cbd4da9ed10ba6',
} );

connection.connect( ( err ) => {
    if ( err ) {
        console.log( 'Erreur de connection à la base de donnée !' );
        return;
    }
    console.log( 'Base de donnée connectée !' );
} );




module.exports = connection;