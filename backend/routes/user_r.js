const express = require( 'express' );
const router = express.Router();
const userCtrl = require( '../controllers/user' )
const auth = require( "../middleware/auth" )/// chaque route sera aura besoin de "auth" pour authentifier les requêtes, à rajouter une fois que toutes celle-ci seront construite

router.post( '/signup',auth, userCtrl.signup );
router.post( '/login',auth, userCtrl.login );
router.post( '/myAccount',auth, userCtrl.getMyinfos );
router.put( '/changeInfos',auth, userCtrl.changeMyinfos );
router.post( '/myPlace',auth, userCtrl.getMySpotInfos );

module.exports = router;
