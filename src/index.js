import express from 'express';
import order from './routes/orders.js';
import category from './routes/categories.js';
import variant from './routes/variants.js';
import product from './routes/products.js';
import table from './routes/tables.js';
import printer from './routes/printers.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', order);
app.use('/api/v1/', category);
app.use('/api/v1/', product);
app.use('/api/v1/', variant);
app.use('/api/v1/', table);
app.use('/api/v1/', printer);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
