import { Sequelize } from 'sequelize';

const Products = {
  product_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
};

export default Products;
