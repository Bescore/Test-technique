// get the client
const mysql = require( 'mysql2' );

// create the connection to database
const connection = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "",
    database: "test_tech_second",

    /* host: process.env.LOC_SQL,
     user: process.env.USERLOC_SQL,
     password: process.env.PASSLOC_SQL, 
     database: process.env.DB_NAME_LOC,*/

    /*host: process.env.HOST_SQL,
    user: process.env.USERNAME_SQL,
    password: process.env.PASSWORD_SQL, 
    database: process.env.DB_NAME,
    */
} );

connection.connect( ( err ) => {
    if ( err ) {
        console.log( 'Erreur de connection à la base de donnée !' );
        return;
    }
    console.log( 'Base de donnée connectée !' );
} );
setInterval( function () {
    connection.query( 'SELECT 1' );
}, 5000 );



module.exports = connection;