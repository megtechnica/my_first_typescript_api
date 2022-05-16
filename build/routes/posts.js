"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const banks_1 = __importDefault(require("../controllers/banks"));
const router = express_1.default.Router();
router.get('/banks', banks_1.default.getBanks);
router.get('/banks/:id', banks_1.default.getBank);
router.get('/carrierservices', banks_1.default.getCarrierServices);
router.get('/carrierservices/:id', banks_1.default.getCarrierService);
router.put('/carrierservices/:id', banks_1.default.updateCarrierService);
router.delete('/dispensary/:id', banks_1.default.getDispensary);
router.post('/dispensary', banks_1.default.getDispensaries);
router.post('/dispensary', banks_1.default.updateDispensary);
module.exports = router;
