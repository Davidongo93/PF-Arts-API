const {getArtworksController}=require('../controllers/controllersArtworks')

const getArtworksHandler=async(req,res)=>{
    try {
        const artworks=await getArtworksController();
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={getArtworksHandler}