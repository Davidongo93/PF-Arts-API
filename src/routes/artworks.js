const { Router } = require('express');
const artworksRouter=Router();
const {getArtworksHandler}=require('../handlers/handlersArtworks')


artworksRouter.get("/",getArtworksHandler)



module.exports={artworksRouter}