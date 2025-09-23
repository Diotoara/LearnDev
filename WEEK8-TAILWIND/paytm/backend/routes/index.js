const express = require('express');

const mainRouter = express.Router();
const userRouter = require('./user')
const accRoute = require('./account')

mainRouter.use('/user', userRouter)
mainRouter.use('/accounts', accRoute)

module.exports = mainRouter;