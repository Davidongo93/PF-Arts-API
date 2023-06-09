const { Router } = require('express');
const router = Router();

const router = Router();
const usersRouter = require ('./usersRouter.js')
const {artworksRouter}= require('./artworks')

// Setting up routers first it must be defined and import his file
 router.use('/users', usersRouter);
 router.use('/artworks', artworksRouter);

module.exports = router;
