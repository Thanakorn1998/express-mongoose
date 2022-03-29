const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { route } = require('express/lib/application');
global.task = require('./models/taskmodel');
const routes = require('./routes/taskroutes');
const port = process.env.port || 3000;
const app = express();


mongoose.connect('mongodb://localhost/API',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true}
    );
 



//app.use(bodyParser.json)
app.use(cors());
app.use(bodyParser.urlencoded({extended:true})); 

 

routes(app) 

 



app.get('/', (req,res) =>{
    res.send('Hello Express')
})

app.listen(port, ()=>{
    console.log('Start Server On Port' + port)
})