import db from '../models/index.js';
const variants = db.models.variants;

export const postVariants = (req, res) => {
  const { variant_name, price, product_id } = req.body;

  if (!price) {
    return res.status(400).send({ message: 'Price is required.', status: 400 });
  }

  if (!product_id) {
    return res
      .status(400)
      .send({ message: 'Product id is required.', status: 400 });
  }

  variants
    .create({
      variant_name: variant_name || null,
      price,
      product_id,
    })
    .then((data) => {
      res.send({
        message: 'Variant Added',
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Some error occurred while creating the Variant.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const getVariants = (req, res) => {
  variants
    .findAll()
    .then((data) => {
      res.send({
        message: 'All Variants',
        data: data,
      });
    })
    .catch((error) => {
      res.send(error);
      console.log(error.message);
    });
};

export const deleteVariants = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .send({ message: 'Variants id is required.', status: 400 });
  }

  variants
    .destroy({
      where: {
        variant_id: id,
      },
    })
    .then((affectedRows) => {
      if (affectedRows == 0) {
        return res
          .status(404)
          .send({ message: 'Variants id not found.', status: 404 });
      }

      res.send({
        message: 'Variants Deleted',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while deleting the variants.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const updateVariants = (req, res) => {
  const { id } = req.params;
  const { variant_name, price, product_id } = req.body;

  if (!id) {
    return res
      .status(400)
      .send({ message: 'Variants id is required.', status: 400 });
  }

  if (!variant_name) {
    return res
      .status(400)
      .send({ message: 'Variants name is required.', status: 400 });
  }

  if (!price) {
    return res.status(400).send({ message: 'Price is required.', status: 400 });
  }

  if (!product_id) {
    return res
      .status(400)
      .send({ message: 'Product id is required.', status: 400 });
  }

  variants
    .update(
      {
        variant_name,
        price,
        product_id,
      },
      {
        where: {
          variant_id: id,
        },
      }
    )
    .then((affectedRows) => {
      if (affectedRows == 0) {
        return res
          .status(404)
          .send({ message: 'Variants id not found.', status: 404 });
      }

      res.send({
        message: 'Variants Updated',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while updating the variants.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};
