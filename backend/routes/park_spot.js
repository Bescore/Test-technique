const express = require( 'express' );
const park_ctrl = require( '../controllers/park_spot_ctrl' );
const router = express.Router();

router.get('/', park_ctrl.findEmpty );
module.exports = router;