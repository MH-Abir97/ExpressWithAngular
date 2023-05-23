
var userModel=require('./userModel');
module.exports.getDataFormDbService=()=>{

    return new Promise(function CheckUrl(resolve,reject){
        userModel.find({},function returnData (error,result){
            if(error){
                reject(false);
            }else{
                resolve(result)
            }
        })
    })
}

module.exports.createDataFormDbService=(userDetails)=>{

    return new Promise(function CheckUrl(resolve,reject){
        var userModelData=new userModel();
        userModelData.name=userDetails.name;
        userModelData.phone=userDetails.phone;
        userModelData.email=userDetails.email;
        userModelData.save(function resultHandle(error,result){
         if(error){
          reject(false)
         }else{
            resolve(result);
         }
        })
    })
}