"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getBanks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get some banks
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts = result.data;
    return res.status(200).json({
        message: posts
    });
});
const getBank = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the bank id from the req
    let id = req.params.id;
    // get the bank
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let bank = result.data;
    return res.status(200).json({
        message: bank
    });
});
const getCarrierServices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get some carrier services
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts`);
    let service = result.data;
    return res.status(200).json({
        message: service
    });
});
const getCarrierService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the carrier service id from the req
    let id = req.params.id;
    // get the carrier service
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let service = result.data;
    return res.status(200).json({
        message: service
    });
});
// updating a dispensary's carrier service
const updateCarrierService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // get the carrierservice id from the req.params
    let id = req.params.id;
    let title = (_a = req.body.title) !== null && _a !== void 0 ? _a : null;
    let body = (_b = req.body.body) !== null && _b !== void 0 ? _b : null;
    // update the service
    let response = yield axios_1.default.put(`https://jsonplaceholder.typicode.com/posts/${id}`, Object.assign(Object.assign({}, (title && { title })), (body && { body })));
    // return response
    return res.status(200).json({
        message: response.data
    });
});
const getDispensaries = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get some carrier services
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts`);
    let service = result.data;
    return res.status(200).json({
        message: service
    });
});
const getDispensary = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the carrier service id from the req
    let id = req.params.id;
    // get the carrier service
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let service = result.data;
    return res.status(200).json({
        message: service
    });
});
// updating a dispensary's carrier service
const updateDispensary = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    // get the carrierservice id from the req.params
    let id = req.params.id;
    let title = (_c = req.body.title) !== null && _c !== void 0 ? _c : null;
    let body = (_d = req.body.body) !== null && _d !== void 0 ? _d : null;
    // update the service
    let response = yield axios_1.default.put(`https://jsonplaceholder.typicode.com/posts/${id}`, Object.assign(Object.assign({}, (title && { title })), (body && { body })));
    // return response
    return res.status(200).json({
        message: response.data
    });
});
exports.default = { getBanks, getBank, getCarrierServices, getCarrierService, updateCarrierService, getDispensary, getDispensaries, updateDispensary };
