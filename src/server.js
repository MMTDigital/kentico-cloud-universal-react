import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import AsyncProps, { loadPropsOnServer } from 'async-props'
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import serialize from 'serialize-javascript';

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, '_static')));


app.get('*', (req, res) => {
  let appHTML;
  match({ routes, location: req.url }, (err, redirect, renderProps) => {
    if (renderProps) {
      loadPropsOnServer(renderProps, null, (err, asyncProps, scriptTag) => {
        appHTML = renderToString( <AsyncProps {...renderProps} {...asyncProps} /> )

        const html = res.render('index', { appHTML });
        res.send(html)
      })
    }
    else {
      appHTML = renderToString( <NotFoundPage /> )
      const html = res.render('index', { appHTML });
      res.send(html)
    }
  })
})

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
