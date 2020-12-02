const db = require('../models');

module.exports = function (app) {
  app.get('/api/recipes', (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.User.findAll({
      where: query,
      include: [db.User],
    }).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });

  app.get('/api/recipes/:id', (req, res) => {
    db.Recipe.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Ingredient, db.Instruction],
    }).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });

  app.post('/api/recipes', (req, res) => {
    db.Recipe.create(req.body).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });

  app.delete('/api/recipes/:id', (req, res) => {
    db.Recipe.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });

  app.put('/api/recipes', (req, res) => {
    db.Recipe.update(
      req.body,
      {
        where: {
          id: req.body.id,
        },
      },
    ).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });
};
