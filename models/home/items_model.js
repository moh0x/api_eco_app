const mongoose = require("mongoose");
const itemsSchema = new mongoose.Schema({
    itemNameEnglish:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    itemNameArabic:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    itemDescArabic:{
        type:String,
        required:true,
        minLength:6,
<<<<<<< HEAD
        maxLength:600
=======
        maxLength:300
>>>>>>> 13384bac412d2bb6c64861e6fcb189e95ee56b69
       },
       itemDescEnglish:{
        type:String,
        required:true,
        minLength:6,
<<<<<<< HEAD
        maxLength:600
=======
        maxLength:300
>>>>>>> 13384bac412d2bb6c64861e6fcb189e95ee56b69
       },
       itemImage:{
        type:String,
        required:true,
        minLength:6,
        maxLength:200
       },
       itemCount:{
        type:Number,
        required:true,
        minLength:6,
        maxLength:200
       },
       itemActive:{
        type:Boolean,
        required:true,
        default:true
       },
       itemPrice:{
        type:Number,
        required:true,
        minLength:6,
        maxLength:200
       },
       itemDisCount:{
        type:Number,
<<<<<<< HEAD
   
=======
        required:true,
>>>>>>> 13384bac412d2bb6c64861e6fcb189e95ee56b69
        minLength:6,
        maxLength:100
       },
       itemCatId:{
        type:String,
        required:true,
        minLength:6,
        maxLength:100
       },
<<<<<<< HEAD
       itemLikesCount:{
        type:Number,
        required:true,
        minLength:6,
        maxLength:100
       },
       
   
});
const Item = mongoose.model("Item",itemsSchema);
module.exports = {Item};
=======
   
});
const Item = mongoose.model("Item",itemsSchema);
module.exports = {Item};
>>>>>>> 13384bac412d2bb6c64861e6fcb189e95ee56b69
