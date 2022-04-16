const express = require( 'express' );
const router = express.Router();
const userCtrl = require( '../controllers/user' )
const auth = require( "../middleware/auth" )/// chaque route sera aura besoin de "auth" pour authentifier les requêtes, à rajouter une fois que toutes celle-ci seront construite

router.post( '/signup', userCtrl.signup );
router.post( '/login', userCtrl.login );
router.post( '/myAccount', userCtrl.getMyinfos );
router.put( '/changeInfos', userCtrl.changeMyinfos );
router.post( '/myPlace', userCtrl.getMySpotInfos );

module.exports = router;
