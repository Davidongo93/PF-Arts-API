const axios = require('axios');
const URL = 'https://www.wikiart.org/en/api/2/MostViewedPaintings';
const { Artwork, User } = require('../../db');

const getAllArtwork = async () => {
  console.log("reach artwork");
  const count = await Artwork.count();
  if (count === 0) {
    throw Error('No artworks available');
  }
  const artworks = await Artwork.findAll({
    include: {
      model: User,
      attributes: ['userName'],
    },
  });

  return artworks;
};

module.exports = {
  getAllArtwork,
};
