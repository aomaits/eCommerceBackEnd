const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories, including associated products
    const categoriesData = await Category.findAll(
      // JOIN with product
      {include: [{ model: Product }]}
  );
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find individual category, including associated products
    const categoryData = await Category.findByPk(req.params.id, {
      // JOIN with product
      include: [{ model: Product }]
    })
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, 
      { where: {
      id: req.params.id,
    },
  });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(
      { where: {
        id: req.params.id,
      },
    });
      res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
