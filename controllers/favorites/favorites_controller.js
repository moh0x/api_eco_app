const { User } = require("../../models/user_model");
const httpsStatus = require('../../constants/https_status');
const { Item } = require("../../models/home/items_model");
const changeFavorites = async(req,res)=>{
   try {
    const token = req.headers.token;
    const itemId = req.body.itemId;
    const user = await User.findOne({token:token},{__v:false,password:false});
    const item = await Item.findById(itemId);
    if (user.favorites.includes(itemId)) {
        const indexItem = user.favorites.indexOf(itemId);
        const newFav = user.favorites.splice(indexItem,1);
        await User.findOneAndUpdate({token:token},{
            $set:{
                favorites:newFav
            }
        });
        const number= item.itemLikesCount - 1;
        const newItem=  await Item.findOneAndUpdate({_id:itemId},{
            $set:{
                itemLikesCount:number
            }
        })
        await newItem.save();
        await user.save();
        const newUser = await User.findOne({token:token},{__v:false,password:false});
        res.status(200).json({"status":httpsStatus.SUCCESS,"data":newUser});
    } else {
        const newFav = user.favorites.unshift(itemId);
        await User.findOneAndUpdate({token:token},{
            $set:{
                favorites:newFav
            }
        });
      
        const number= item.itemLikesCount + 1;
        const newItem=  await Item.findOneAndUpdate({_id:itemId},{
            $set:{
                itemLikesCount:number
            }
        })
        await newItem.save();
        await user.save();
        const newUser = await User.findOne({token:token},{__v:false,password:false});
        res.status(200).json({"status":httpsStatus.SUCCESS,"data":newUser});
    }
    
   } catch (error) {
    console.log(error);
    res.status(400).json({"status":httpsStatus.ERROR,"message":"error"});
   }
}
const getUserFavorites = async(req,res)=>{
   try {
    const token = req.headers.token;
    const user = await User.findOne({token:token},{__v:false,password:false});
    const favListItemsIds = user.favorites;
  
   const items = await Item.find({_id:{
    $in:favListItemsIds
   }});
   res.status(200).json({"status":httpsStatus.SUCCESS,"data":items});
   } catch (error) {
    console.log(error);
    res.status(200).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
   }
}
module.exports = {
    changeFavorites,getUserFavorites
   }
