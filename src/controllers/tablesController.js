import db from '../models/index.js';
const tables = db.models.tables;

export const postTables = (req, res) => {
  const { table_name } = req.body;

  if (!table_name) {
    return res
      .status(400)
      .send({ message: 'Table name is required.', status: 400 });
  }

  tables
    .create({
      table_name,
    })
    .then((data) => {
      res.send({
        message: 'Table Added',
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Some error occurred while creating the Table.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const getTables = (req, res) => {
  tables
    .findAll()
    .then((data) => {
      res.send({
        message: 'All Tables',
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        message: 'An error occurred while fetching tables.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const deleteTables = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .send({ message: 'Table id is required.', status: 400 });
  }

  tables
    .destroy({
      where: {
        table_id: id,
      },
    })
    .then((affectedRows) => {
      if (affectedRows == 0) {
        return res
          .status(404)
          .send({ message: 'Table id not found.', status: 404 });
      }

      res.send({
        message: 'Table Deleted',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while deleting the table.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const updateTables = (req, res) => {
  const { id } = req.params;
  const { table_name } = req.body;

  if (!id) {
    return res
      .status(400)
      .send({ message: 'Table id is required.', status: 400 });
  }

  if (!table_name) {
    return res
      .status(400)
      .send({ message: 'Table name is required.', status: 400 });
  }

  tables
    .update(
      {
        table_name,
      },
      {
        where: {
          table_id: id,
        },
      }
    )
    .then((affectedRows) => {
      if (affectedRows == 0) {
        return res
          .status(404)
          .send({ message: 'Table id not found.', status: 404 });
      }

      res.send({
        message: 'Table Updated',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while updating the table.',
        error: error.message,
        status: 500,
      });
    });
};
