import db from '../models/index.js';
const categories = db.models.categories;

export const postCategories = (req, res, next) => {
  const { category_name } = req.body;

  if (!category_name) {
    return res
      .status(400)
      .send({ message: 'Category name is required.', status: 400 });
  }
  categories
    .create({
      category_name,
    })
    .then((data) => {
      res.send({
        message: 'Category Added',
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error.message);
    });
};

export const getCategories = (req, res, next) => {
  categories
    .findAll()
    .then((data) => {
      res.send({
        message: 'All Categories',
        data: data,
      });
    })
    .catch((error) => {
      res.send(error);
      console.log(error.message);
    });
};

export const deleteCategories = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .send({ message: 'Category id is required.', status: 400 });
  }

  categories
    .destroy({
      where: {
        id: id,
      },
    })
    .then((affectedRows) => {
      if (affectedRows === 0) {
        return res
          .status(404)
          .send({ message: 'Category not found.', status: 404 });
      }

      res.send({
        message: 'Category Deleted',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while deleting the category.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};

export const updateCategories = (req, res) => {
  const { id } = req.params;
  const { category_name } = req.body;
  if (!id) {
    return res
      .status(400)
      .send({ message: 'Category id is required.', status: 400 });
  }

  if (!category_name) {
    return res
      .status(400)
      .send({ message: 'Category name is required.', status: 400 });
  }

  categories
    .update(
      {
        category_name,
      },
      {
        where: {
          id: id,
        },
      }
    )
    .then((affectedRows) => {
      if (affectedRows === 0) {
        return res
          .status(404)
          .send({ message: 'Category not found.', status: 404 });
      }

      res.send({
        message: 'Category Updated',
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'An error occurred while updating the category.',
        error: error.message,
        status: 500,
      });
      console.log(error.message);
    });
};
