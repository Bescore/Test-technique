const express = require( 'express' );
const park_ctrl = require( '../controllers/park_spot_ctrl' );
const router = express.Router();

router.put( '/spot', park_ctrl.getSpot );
router.put( '/freespot', park_ctrl.freeThespot )
router.get( '/', park_ctrl.findEmpty );
router.post( '/emp_floor', park_ctrl.findEmptyby_floor );
router.get( '/time', park_ctrl.timeRemaining );
router.post( '/verifs', park_ctrl.amIparked );
module.exports = router;