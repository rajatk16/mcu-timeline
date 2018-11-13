const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev})
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/marvel', (req, res) => app.render(req, res, '/'));
  server.get('/', (req, res)  => res.redirect(301, '/marvel'));
  server.get('/marvel/:id', (req, res) => {
    return app.render(req, res, '/movie', Object.assign({id: req.params.id}, req.query))
  });
  server.get('/movie', (req, res) => {
    if(req.query.id) return res.redirect(`/marvel/${req.query/id}`);
    res.redirect(301, '/marvel');
  })
  server.get('/*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if(err) throw err
    console.log(`Listening on http://localhost:${port}`);
  })
})