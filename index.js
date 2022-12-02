var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var cors =require("cors")
const routes = require("./router/index")
const app = express()
const port=8080
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Insomnia:insomnia@cluster0.znsgeav.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;





db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))




app.post("/suggestions",(req,res)=>{
    // var name = req.body.name;
    // var lastName = req.body.lastName;

    // var email = req.body.email;
    // var phone = req.body.phone;
    // var sexe = req.body.sexe;
    // var suggestionsVIH = req.body.suggestionsVIH;
    // var asymptomesVIH = req.body.asymptomesVIH;
    // var suggestionsSIDA = req.body.suggestionsSIDA;
    // var asymptomesSIDA = req.body.asymptomesSIDA;
    // var advice = req.body.advice;
    // var timeStampInMs = $lte= new Date();


    // var data = {
    //     "name": name,
    //     "lastName" : lastName,
    //     "email":email,
    //     "phone":phone,
    //     "sexe": sexe,
    //     "suggestionsVIH" : suggestionsVIH,
    //     "asymptomesVIH" : asymptomesVIH,
    //     "suggestionsSIDA" : suggestionsSIDA,
    //     "asymptomesSIDA" : asymptomesSIDA,
    //     "advice":advice,
    //     "timeStampInMs": timeStampInMs , 




    // }


    db.collection('users').insertOne(req.body,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('suggestions_success.html')

})
app.post("/question",(req,res)=>{


    db.collection('questions').insertOne(req.body,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('suggestions_success.html')

})
// app.get("/getAllQuestions",(req,res)=>{


//     db.collection('questions').find({}).toArray(function(err, res) {
//             if (err) throw err;
//             console.log("res",err);
//             db.close();
//           });
// res.end()


// })
// dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
})

app.use('/',routes)
app.listen(port,async()=>{
    console.log("App running")
})