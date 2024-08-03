import express from 'express';
const router = express.Router();
import { getOrder } from '../controllers/ordersController.js';

router.get('/order', getOrder);

const order = router;
export default order;
