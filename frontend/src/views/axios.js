import axios from 'axios'


axios.defaults.baseURL = 'https://backend-park.herokuapp.com/';

axios.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + localStorage.getItem( 'token' );

