const axios = require( 'axios' )


axios.defaults.baseURL = 'https://sunny-dusk-554699.netlify.app';

axios.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + localStorage.getItem( 'token' );

