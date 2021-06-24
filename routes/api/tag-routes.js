const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


//get all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
     include: [{ model: Product, through: ProductTag}],
   });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});


//get tags by id
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
     include: [{ model: Product, through: ProductTag}],
   });
   if (!tagData) {
     res.status(404).json({message: "No Tag with this id"});
     return;
   };
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});


//create new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//update tag by id
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body,
      {
      where: {
        id: req.params.id,
  
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No Tag found with this id" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//delete tag by id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with this id' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
