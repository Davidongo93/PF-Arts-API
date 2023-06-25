const createArtwork = require('../../controllers/artworks/postController');
const postArtworkHandler = async (req, res) => {
  const { title, authorName, date, height, width, price, category } = req.body;
  const userId = req.userId;
  const image = typeof req.file === 'object' ? req.file.path : req.body.image;
console.log("holi",image);
  try {
    if (
      !userId ||
      !title ||
      !authorName ||
      !image ||
      !date ||
      !height ||
      !width ||
      !price ||
      !category
    ) {
      throw new Error('Missing or invalid data');
    }

    const response = await createArtwork(
      userId,
      title,
      authorName,
      image,
      date,
      height,
      width,
      price,
      category
    );

    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postArtworkHandler;
