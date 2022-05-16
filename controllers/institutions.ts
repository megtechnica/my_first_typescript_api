/** source/controllers/institutions.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Bank {
    bankId: Number;
    id: Number;
    name: String;
    body: String;
}

interface CarrierService {
    carrierServiceId: Number;
    id: Number;
    name: String;
    preferredCarrier: String;  // Boolean value
}

interface Dispensary {
    dispensaryId: Number;
    id: Number;
    name: String;
    // carrierServiceId: Number;
    preferredCarrier: String;  // Boolean value
}

const getBanks = async (req: Request, res: Response, next: NextFunction) => {
    // get some banks
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let bank: [Bank] = result.data;
    return res.status(200).json({
        message: bank
    });
};

const getBank = async (req: Request, res: Response, next: NextFunction) => {
    // get the bank id from the req
    let id: string = req.params.id;
    // get the bank
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let bank: Bank = result.data;
    return res.status(200).json({
        message: bank
    });
};


const getCarrierServices = async (req: Request, res: Response, next: NextFunction) => {
    // get some carrier services
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let service: [CarrierService] = result.data;
    return res.status(200).json({
        message: service
    });
};


const getCarrierService = async (req: Request, res: Response, next: NextFunction) => {
    // get the carrier service id from the req
    let id: string = req.params.id;
    // get the carrier service
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let service: CarrierService = result.data;
    return res.status(200).json({
        message: service
    });
};

// updating a carrier service
const updateCarrierService = async (req: Request, res: Response, next: NextFunction) => {
    // get the carrierservice id from the req.params
    let id: string = req.params.id;
    let name: string = req.body.name ?? null;
    let preferredCarrier: string = req.body.preferredCarrier ?? null;
    // update the service
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        ...(name && { name }),
        ...(preferredCarrier && { preferredCarrier })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};


const getDispensaries = async (req: Request, res: Response, next: NextFunction) => {
    // get some dispensary
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let dispensary: [Dispensary] = result.data;
    return res.status(200).json({
        message: dispensary
    });
};


const getDispensary = async (req: Request, res: Response, next: NextFunction) => {
    // get the dispensary id from the req
    let id: string = req.params.id;
    // get the carrier service
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let dispensary: Dispensary = result.data;
    return res.status(200).json({
        message: dispensary
    });
};

// updating a dispensary's carrier service
const updateDispensary = async (req: Request, res: Response, next: NextFunction) => {
    // get the carrierservice id from the req.params
    let id: string = req.params.id;
    let name: string = req.body.name ?? null;
    let preferredCarrier: string = req.body.preferredCarrier ?? null;
    // update the service
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        ...(name && { name }),
        ...(preferredCarrier && { preferredCarrier })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};




export default { getBanks, getBank, getCarrierServices, getCarrierService, updateCarrierService, getDispensary, getDispensaries, updateDispensary };