const express = require( 'express' );
const park_ctrl = require( '../controllers/park_spot_ctrl' );
const router = express.Router();
const auth = require( "../middleware/auth" )/// chaque route sera aura besoin de "auth" pour authentifier les requêtes, à rajouter une fois que toutes celle-ci seront construite, ce middleware pose problème je dois modifier mes appels api dans mon front...

router.put( '/spot', park_ctrl.getSpot );
router.put( '/freespot', park_ctrl.freeThespot )
router.get( '/', park_ctrl.findEmpty );
router.post( '/emp_floor', park_ctrl.findEmptyby_floor );
router.get( '/time', park_ctrl.timeRemaining );
router.post( '/verifs', park_ctrl.amIparked );
module.exports = router;