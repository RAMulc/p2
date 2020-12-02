const db = require('../models');

module.exports = function (app) {
  app.post('/api/login', (req, res) => {
    res.json(req.user);
  });

  app.post('/api/signup', (req, res) => {
    db.User.create({
      firstName: req.body.firstName,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, '/api/login');
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/users/:id', (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Recipe],
    }).then((dbUser) => {
      res.json(dbUser);
    });
  });
};
