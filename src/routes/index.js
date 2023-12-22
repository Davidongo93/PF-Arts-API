const { Router } = require('express');
const router = Router();
const usersRouter = require('./usersRouter.js');
const artworksRouter = require('./artworksRouter.js');
const favoritesRouter = require('./favoritesRouter.js');
const transRouter = require('./transRouter.js');
const reviewsRouter = require('./reviewsRouter.js');
const adminRouter = require('./adminRouter.js');
const faviconController = require('../controllers/faviconController/faviconController.js')

router.get('/', (req, res) => {
    const welcomeMessage = "Welcome to Henry Art Gallery API! 🎨✨ Use the provided endpoints to explore our art collection. Happy coding! 🌈🚀";
    res.status(200).send(welcomeMessage);
  });

// Setting up routers first it must be defined and import his file
router.use('/users', usersRouter);
router.use('/artworks', artworksRouter);
router.use('/favorites', favoritesRouter);
router.use('/transactions', transRouter);
router.use('/reviews', reviewsRouter);
router.use('/admin', adminRouter);
router.get('/favicon.ico', faviconController);
module.exports = router;
