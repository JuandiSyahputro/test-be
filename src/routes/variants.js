import express from 'express';
import {
  deleteVariants,
  getVariants,
  postVariants,
  updateVariants,
} from '../controllers/variantsController.js';
const router = express.Router();

router.post('/variants', postVariants);
router.get('/variants', getVariants);
router.delete('/variants/:id', deleteVariants);
router.put('/variants/:id', updateVariants);

const variants = router;
export default variants;
