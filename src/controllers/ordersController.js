import sequelize from '../utils/db.js';

export const getOrder = (req, res, next) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send('Connection has been established successfully.');
      next();
    })
    .catch((error) => {
      res.send('Unable to connect to the database: ' + error.message);
    });
};
