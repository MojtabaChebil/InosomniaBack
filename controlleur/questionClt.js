const questionModel =require ("../models/questions")
const questionCtrl = { 
getQuestions:async (req, res) =>{
    try {
      
      const questions = await questionModel.find()

      return res.json({ success: true, data: questions  });
          // console.log(req.params.id)
    } catch (err) {
      
      return res.status(500).json({msg: err.message})
    }
  },
}
module.exports= questionCtrl