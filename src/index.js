import express from 'express';
import order from './routes/orders.js';
import category from './routes/categories.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', order);
app.use('/api/v1/', category);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
