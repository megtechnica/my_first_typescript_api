import express from 'express';
import controller from '../controllers/institutions';
const router = express.Router();

router.get('/banks', controller.getBanks);
router.get('/banks/:id', controller.getBank);
router.get('/carrierservices', controller.getCarrierServices);
router.get('/carrierservices/:id', controller.getCarrierService);
router.put('/carrierservices/:id', controller.updateCarrierService);
router.delete('/dispensary/:id', controller.getDispensary);
router.post('/dispensary', controller.getDispensaries);
router.post('/dispensary', controller.updateDispensary);

export = router;