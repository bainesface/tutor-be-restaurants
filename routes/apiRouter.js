const apiRouter = require("express").Router();
const areasRouter = require("./areasRouter");

apiRouter.use("/areas", areasRouter);

module.exports = apiRouter;
