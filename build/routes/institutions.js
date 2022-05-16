"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const institutions_1 = __importDefault(require("../controllers/institutions"));
const router = express_1.default.Router();
router.get('/banks', institutions_1.default.getBanks);
router.get('/banks/:id', institutions_1.default.getBank);
router.get('/carrierservices', institutions_1.default.getCarrierServices);
router.get('/carrierservices/:id', institutions_1.default.getCarrierService);
router.put('/carrierservices/:id', institutions_1.default.updateCarrierService);
router.delete('/dispensary/:id', institutions_1.default.getDispensary);
router.post('/dispensary', institutions_1.default.getDispensaries);
router.post('/dispensary', institutions_1.default.updateDispensary);
module.exports = router;
