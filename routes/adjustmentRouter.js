const adjustmentController = require('../controllers/adjustmentController');
const router = require('express').Router();

router.post('/addAdjustment', adjustmentController.addAdjustment);
router.get('/getAllAdjustment', adjustmentController.getAllAdjustment);
router.get('/:id', adjustmentController.getAdjustmentById);

module.exports = router;