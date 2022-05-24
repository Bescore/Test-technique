const express = require( 'express' );
const park_ctrl = require( '../controllers/park_spot_ctrl' );
const router = express.Router();
const auth = require( "../middleware/auth" )/// chaque route sera aura besoin de "auth" pour authentifier les requêtes, à rajouter une fois que toutes celle-ci seront construite

router.put( '/spot',auth, park_ctrl.getSpot );
router.put( '/freespot',auth, park_ctrl.freeThespot )
router.get( '/',auth, park_ctrl.findEmpty );
router.post( '/emp_floor',auth, park_ctrl.findEmptyby_floor );
router.get( '/time',auth, park_ctrl.timeRemaining );
router.post( '/verifs',auth, park_ctrl.amIparked );
module.exports = router;