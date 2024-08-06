import db from '../models/index.js';
const printers = db.models.printers;

export const postPrinters = (req, res) => {
  const { printer_name } = req.body;

  if (!printer_name) {
    return res
      .status(400)
      .send({ message: 'Printers name is required.', status: 400 });
  }

  printers
    .create({
      printer_name,
    })
    .then((data) => {
      res.send({
        message: 'Printers Added',
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Some error occurred while creating the Printers.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const getPrinters = (req, res) => {
  printers
    .findAll()
    .then((data) => {
      res.send({
        message: 'All Printers',
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        message: 'An error occurred while fetching Printers.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const deletePrinters = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .send({ message: 'Printers id is required.', status: 400 });
  }

  printers
    .destroy({
      where: {
        printer_id: id,
      },
    })
    .then((affectedRows) => {
      if (affectedRows == 0) {
        return res
          .status(404)
          .send({ message: 'Printers id not found.', status: 404 });
      }

      res.send({
        message: 'Printers Deleted',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while deleting the Printers.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const updatePrinters = (req, res) => {
  const { id } = req.params;
  const { printer_name } = req.body;
  if (!id) {
    return res
      .status(400)
      .send({ message: 'Category id is required.', status: 400 });
  }

  if (!printer_name) {
    return res
      .status(400)
      .send({ message: 'Printers name is required.', status: 400 });
  }

  printers
    .update(
      {
        printer_name,
      },
      {
        where: {
          printer_id: id,
        },
      }
    )
    .then((affectedRows) => {
      if (affectedRows == 0) {
        return res
          .status(404)
          .send({ message: 'Printers id not found.', status: 404 });
      }

      res.send({
        message: 'Printers Updated',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while updating the Printers.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};
