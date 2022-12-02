const express= require('express')
const questionCtrl  = require("../controlleur/questionClt");
const router = express.Router()
router.get('/getAllQuestions',questionCtrl.getQuestions)
module.exports= router;
