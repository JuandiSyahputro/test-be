import db from '../utils/db.js';
import Categories from './categoriesModel.js';

db.define('categories', Categories, {
  tableName: 'categories',
  underscored: true,
});

db.sync();

export default db;
