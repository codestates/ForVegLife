const models = require("../../models")

module.exports = async (req, res) => {
    // res.send('카테고리별로 불러오기')
    
   try { const category = req.params.category

    let data = []
    const allData = await models.place.findAll({
      include: [
        {
          model: models.vegCategory,
          required: true,
        },
      ],
      where:{id:category},raw:true
    })
    console.log(allData)

    for(let i =0; i<allData.length; i++){
      data.push({
        message: "ok",
        title: allData[i].title,
        placeId: allData[i].id,
        longitude: allData[i].longitude,
        latitude: allData[i].latitude,
      })
    }
    res.status(200)
    .send(data)}
    catch (error) {
      res.status(500).send(error);
   }
  };
  