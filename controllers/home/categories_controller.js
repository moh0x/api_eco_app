const { Category } = require("../../models/home/categories_model");
const httpsStatus = require('../../constants/https_status');
const getAllCategories = async(req,res)=>{
    try {
     var token =  req.headers.token;
     const categories = await Category.find();
     res.status(200).json({"status":httpsStatus.SUCCESS,"data":categories});
    } catch (error){
     res.status(400).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
    }
 }
 module.exports = {
   getAllCategories
   }