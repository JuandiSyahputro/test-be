import db from '../utils/db.js';
import Categories from './categoriesModel.js';
import Variants from './variantModel.js';

db.define('categories', Categories, {
  tableName: 'categories',
  underscored: true,
});

db.define('variants', Variants, {
  tableName: 'variants',
  underscored: true,
});

db.sync();

export default db;
