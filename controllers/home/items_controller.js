const { Item } = require("../../models/home/items_model");
const httpsStatus = require('../../constants/https_status');
const getAllItems = async(req,res)=>{
    try {
     var token =  req.headers.token;
     const items = await Item.find();
     res.status(200).json({"status":httpsStatus.SUCCESS,"data":items});
    } catch (error){
     res.status(400).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
    }
 }
 module.exports = {
    getAllItems
<<<<<<< HEAD
   }
=======
   }
>>>>>>> 13384bac412d2bb6c64861e6fcb189e95ee56b69
