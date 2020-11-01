require("dotenv").config({path : "config/keys.env"});
const  {express, bodyParser, cors, fileUpload, projectRoutes, mongoose,session}= require("./config/libraryLoader");
const app = express();


//body parser middlware
app.use(bodyParser.urlencoded({extended:true}))


//File upload middleware
app.use(fileUpload());


app.use("/projects",projectRoutes);


app.listen(process.env.PORT,()=>{

    console.log("The web server is up and running")
})

