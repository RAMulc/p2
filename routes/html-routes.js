const path = require('path');

// Routes
// =============================================================
module.exports = function (app) {
  // index route loads index.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // new-recipe route loads new-recipe.html
  app.get('/new-recipe', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/new-recipe.html'));
  });

  // search route loads search.html
  app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/search.html'));
  });
};
