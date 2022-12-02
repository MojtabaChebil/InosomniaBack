const  mongoose =require ("mongoose");

const questionsSchema = new mongoose.Schema(
  {
    key:String,
    question:String


  },
  { timestamps: true }
);

const questionModel= mongoose.model("questions", questionsSchema);
module.exports = questionModel;