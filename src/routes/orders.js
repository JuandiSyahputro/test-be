import express from 'express';
import {
  getOrderBill,
  getOrders,
  postOrders,
} from '../controllers/ordersController.js';
const router = express.Router();

router.post('/order', postOrders);
router.get('/order', getOrders);
router.get('/order-bill', getOrderBill);

const order = router;
export default order;
