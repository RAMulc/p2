// Routes
// =============================================================
module.exports = function (app) {
  // index route loads index.html
  app.get('/', (req, res) => {
    res.render('index');
  });
};
