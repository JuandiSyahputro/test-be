import express from 'express';
import {
  deletePrinters,
  getPrinters,
  postPrinters,
  updatePrinters,
} from '../controllers/printersController.js';
const router = express.Router();

router.post('/printer', postPrinters);
router.get('/printers', getPrinters);
router.delete('/printer/:id', deletePrinters);
router.put('/printer/:id', updatePrinters);

const printer = router;
export default printer;
