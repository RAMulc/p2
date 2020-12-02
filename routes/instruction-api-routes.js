const db = require('../models');

module.exports = function (app) {
  app.get('/api/instructions', (req, res) => {
    const query = {};
    if (req.query.recipe_id) {
      query.RecipeId = req.query.recipe_id;
    }
    db.Instruction.findAll({
      where: query,
      include: [db.Recipe],
    }).then((dbInstruction) => {
      res.json(dbInstruction);
    });
  });

  app.get('/api/instructions/:id', (req, res) => {
    db.Instruction.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbInstruction) => {
      res.json(dbInstruction);
    });
  });

  app.post('/api/instructions', (req, res) => {
    db.Instruction.create(req.body).then((dbInstruction) => {
      res.json(dbInstruction);
    });
  });

  app.delete('/api/instructions/:id', (req, res) => {
    db.Instruction.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbInstruction) => {
      res.json(dbInstruction);
    });
  });

  app.put('/api/instructions', (req, res) => {
    db.Instruction.update(
      req.body,
      {
        where: {
          id: req.body.id,
        },
      },
    ).then((dbInstruction) => {
      res.json(dbInstruction);
    });
  });
};
