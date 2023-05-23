
var userService=require('./userService')
var getDataControllerfn=async (req,res)=>{
    var employee=await userService.getDataFormDbService();
    res.send({'status':true,'data':employee});
}

var crateDataControllerfn=async (req,res)=>{
    var status=await userService.createDataFormDbService(req.body);
    if(status){
        res.send({"status":true,"message":"User Create Successfully !!!"})
    }else{
        res.send({"status":true,"message":"error creating User !!!"})
    }
}

module.exports={getDataControllerfn,crateDataControllerfn}