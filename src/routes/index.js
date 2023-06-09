const { Router } = require('express');
const {artworksRouter}= require('./artworks')

const router = Router();
router.use('/artworks', artworksRouter);

module.exports = router;
