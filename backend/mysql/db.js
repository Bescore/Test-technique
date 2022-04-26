// get the client
const mysql = require( 'mysql2' );

// create the connection to database
const connection = mysql.createConnection( {
    host: process.env.HOST_SQL,
    user: process.env.USERNAME_SQL,
    password: process.env.PASSWORD_SQL,   //changez les logs pour vous connecter à votre base en locale
    database: process.env.DB_NAME,

} );

connection.connect( ( err ) => {
    if ( err ) {
        console.log( 'Erreur de connection à la base de donnée !' );
        return;
    }
    console.log( 'Base de donnée connectée !' );
} );
setInterval(function () {
    connection.query( 'SELECT 1' );
}, 5000);



module.exports = connection;