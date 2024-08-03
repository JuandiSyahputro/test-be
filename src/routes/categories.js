import express from 'express';
import {
  postCategories,
  getCategories,
  deleteCategories,
  updateCategories,
} from '../controllers/categoriesController.js';
const router = express.Router();

router.post('/categories', postCategories);
router.get('/categories', getCategories);
router.delete('/categories/:id', deleteCategories);
router.put('/categories/:id', updateCategories);

const category = router;
export default category;
