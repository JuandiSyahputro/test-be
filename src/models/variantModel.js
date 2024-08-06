import { Sequelize } from 'sequelize';

const Variants = {
  variant_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  variant_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
};

export default Variants;
