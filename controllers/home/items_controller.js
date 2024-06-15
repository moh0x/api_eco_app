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
 const getSearchItems = async(req,res)=>{
   try {
    var token =  req.headers.token;
    var textItem = req.body.textItem;
    const regex =new RegExp(textItem,'i');
    const items = await Item.find({
     $or:[
      {itemNameArabic:regex},{itemNameEnglish:regex}
     ]
    });
    res.status(200).json({"status":httpsStatus.SUCCESS,"data":items});
   } catch (error){
    res.status(400).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
   }
}
 module.exports = {
    getAllItems,getSearchItems
   }
