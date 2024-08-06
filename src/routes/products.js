import express from 'express';
import {
  deleteProduct,
  getProduct,
  postProduct,
  updateProduct,
} from '../controllers/productController.js';
const router = express.Router();

router.post('/product', postProduct);
router.get('/product', getProduct);
router.delete('/product/:id', deleteProduct);
router.put('/product/:id', updateProduct);

const product = router;
export default product;
