const axios = require( 'axios' )


axios.defaults.baseURL = 'https://app-data-park.herokuapp.com';

axios.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + localStorage.getItem( 'token' );

