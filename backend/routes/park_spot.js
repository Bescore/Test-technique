const express = require( 'express' );
const park_ctrl = require( '../controllers/park_spot_ctrl' );
const router = express.Router();

router.put( '/spot', park_ctrl.getSpot );
router.put('/freespot',park_ctrl.freeThespot)
router.get('/', park_ctrl.findEmpty );
router.post( '/time', park_ctrl.timeRemaining );
module.exports = router;