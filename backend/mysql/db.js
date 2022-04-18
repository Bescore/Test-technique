// get the client
const mysql = require( 'mysql2' );

// create the connection to database
const connection = mysql.createConnection( {
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b27eb2e635d938',
    password: 'c9726ecb',   //changez les logs pour vous connecter à votre base en locale
    database: 'heroku_b7b959bf574bd7a',
} );

connection.connect( ( err ) => {
    if ( err ) {
        console.log( 'Erreur de connection à la base de donnée !' );
        return;
    }
    console.log( 'Base de donnée connectée !' );
} );




module.exports = connection;