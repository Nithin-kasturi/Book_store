
import express from 'express';
import { getOrderDetails, setOrderDetails } from '../Controller/order.controller.js';

const router=express.Router();
router.post('/get',getOrderDetails);
router.post('/set',setOrderDetails);
export default router;