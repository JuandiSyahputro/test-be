import db from '../models/index.js';
const product = db.models.product;

export const postProduct = (req, res) => {
  const { product_name, category_id } = req.body;

  if (!product_name) {
    return res
      .status(400)
      .send({ message: 'Product name is required.', status: 400 });
  }

  if (!category_id) {
    return res
      .status(400)
      .send({ message: 'Category id is required.', status: 400 });
  }

  product
    .create({
      product_name,
      category_id,
    })
    .then((data) => {
      res.send({
        message: 'Product Added',
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Some error occurred while creating the Product.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const getProduct = (req, res) => {
  product
    .findAll({
      attributes: ['product_id', 'product_name'],
      include: [
        {
          model: db.models.categories,
          attributes: ['category_id', 'category_name'],
        },
        {
          model: db.models.variants,
          attributes: ['variant_id', 'variant_name', 'price'],
        },
      ],
    })
    .then((data) => {
      res.send({
        message: 'All Products',
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        message: 'An error occurred while fetching products.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .send({ message: 'Product id is required.', status: 400 });
  }

  product
    .destroy({
      where: {
        product_id: id,
      },
    })
    .then((affectedRows) => {
      if (affectedRows == 0) {
        return res
          .status(404)
          .send({ message: 'Product id not found.', status: 404 });
      }

      res.send({
        message: 'Product Deleted',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while deleting the product.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { product_name, category_id } = req.body;

  if (!id) {
    return res
      .status(400)
      .send({ message: 'Product id is required.', status: 400 });
  }

  if (!product_name) {
    return res
      .status(400)
      .send({ message: 'Product name is required.', status: 400 });
  }

  product
    .update(
      {
        product_name,
        category_id,
      },
      {
        where: {
          product_id: id,
        },
      }
    )
    .then((affectedRows) => {
      if (affectedRows == 0) {
        return res
          .status(404)
          .send({ message: 'Product id not found.', status: 404 });
      }

      res.send({
        message: 'Product Updated',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while updating the product.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};
