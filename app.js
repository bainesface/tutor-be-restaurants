const express = require('express');
const app = express();
const { handlesCustomErrors, handles500s } = require('./contollers/errors');

const apiRouter = require('./routes/apiRouter');
app.use(express.json());
app.use('/api', apiRouter);

app.use(handlesCustomErrors);
app.use(handles500s);

module.exports = app;
