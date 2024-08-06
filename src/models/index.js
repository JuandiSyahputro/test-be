import db from '../utils/db.js';
import Categories from './categoriesModel.js';
import Variants from './variantModel.js';
import Products from './productModel.js';
import Tables from './tablesModel.js';
import Printers from './printersModel.js';
import Orders from './ordersModel.js';
import OrderItems from './ordersItemsModel.js';

const Category = db.define('categories', Categories, {
  tableName: 'categories',
  underscored: true,
});

const Product = db.define('product', Products, {
  tableName: 'products',
  underscored: true,
});

const Variant = db.define('variants', Variants, {
  tableName: 'variants',
  underscored: true,
});

const Table = db.define('tables', Tables, {
  tableName: 'tables',
  underscored: true,
});

const Order = db.define('orders', Orders, {
  tableName: 'orders',
  underscored: true,
});

const OrderItem = db.define('orders_items', OrderItems, {
  tableName: 'orders_items',
  underscored: true,
});

db.define('printers', Printers, {
  tableName: 'printers',
  underscored: true,
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

Product.hasMany(Variant, {
  foreignKey: 'product_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

Product.hasMany(OrderItem, {
  foreignKey: 'product_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

Variant.belongsTo(Product, {
  foreignKey: 'product_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

Variant.hasMany(OrderItem, {
  foreignKey: 'variant_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

Order.belongsTo(Table, {
  foreignKey: 'table_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

Order.hasMany(OrderItem, {
  foreignKey: 'order_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
});

OrderItem.belongsTo(Order, {
  foreignKey: 'order_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
});

OrderItem.belongsTo(Product, {
  foreignKey: 'product_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

OrderItem.belongsTo(Variant, {
  foreignKey: 'variant_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

OrderItem.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'restrict',
  onUpdate: 'restrict',
});

db.sync();

export default db;
