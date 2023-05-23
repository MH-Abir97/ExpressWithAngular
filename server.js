
var express=require('express');
var routes=require('./routes/route');
var server=express();
server.use(express.json());


var mongoose=require('mongoose');  
const cors=require('cors');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://employee:employee@cluster1.xqb3lal.mongodb.net/",{ useNewUrlParser: true },(error)=>{
    if(error){
        console.log(error);
       }else{
        console.log('DB Connected');
       }
});

server.use(express.json());
server.use(routes);
server.use(cors());

server.listen(5000,function Check(error){
    if(error){
        console.log(error);
       }else{
        console.log('Connected');
       }
})


