import express from 'express';
import {
  deleteTables,
  getTables,
  postTables,
  updateTables,
} from '../controllers/tablesController.js';
const router = express.Router();

router.post('/table', postTables);
router.get('/tables', getTables);
router.delete('/table/:id', deleteTables);
router.put('/table/:id', updateTables);

const table = router;
export default table;
