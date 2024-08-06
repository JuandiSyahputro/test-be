import { Sequelize } from 'sequelize';

const Orders = {
  order_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  order_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  table_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
};

export default Orders;
