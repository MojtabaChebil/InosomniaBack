import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    nom:String,
    prenom:String,
    age: Number,
    sexe: Enumerator("Femme","Homme"),
    pays: String,
    email:String,
    questions:[{
key:String,
reponse:String
    }
    ]
  },
  { timestamps: true }
);

const users= mongoose.model("user", userSchema);
module.exports = users;