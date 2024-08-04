import express from 'express';
import order from './routes/orders.js';
import category from './routes/categories.js';
import variants from './routes/variants.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', order);
app.use('/api/v1/', category);
app.use('/api/v1/', variants);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
