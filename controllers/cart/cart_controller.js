const { User } = require("../../models/user_model");
const httpsStatus = require('../../constants/https_status');
const { Item } = require("../../models/home/items_model");
const changeItemCart = async(req,res)=>{
    try {
     const token = req.headers.token;
     const count = req.body.count;
     const itemId = req.body.itemId;
     const user = await User.findOne({token:token},{__v:false,password:false});
     const cartListItemsIds = user.cart;
     const newObject = [];
     if (cartListItemsIds.length == 0) {
        cartListItemsIds.unshift({
            "itemId":itemId,
            "count":count
        });
     } else {
        for (let index = 0; index < cartListItemsIds.length; index++) {
            if (cartListItemsIds[index]['itemId'] != itemId ) {
                cartListItemsIds.unshift({
                    "itemId":itemId,
                    "count":count
                }); 
            }
            if (cartListItemsIds[index]['itemId'] == itemId && count == 0) {
               const indexOf = cartListItemsIds.indexOf(cartListItemsIds[index]['itemId']);
               cartListItemsIds.splice(indexOf,1);
               break;
            }
            if (cartListItemsIds[index]['itemId'] == itemId && count != 0) {
       cartListItemsIds[index] = {
        "itemId":itemId,
        "count":count
    }
             }
        }
     }
     const newUser = await User.findOneAndUpdate({token:token},{
        $set:{
            cart:cartListItemsIds
        }
     })
     await newUser.save();
     res.status(200).json({"status":httpsStatus.SUCCESS,"data":newUser.cart});
    } catch (error) {
     console.log(error);
     res.status(400).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
    }
 }
const getUserCart = async(req,res)=>{
   try {
    const token = req.headers.token;
    const user = await User.findOne({token:token},{__v:false,password:false});
    const cartListItemsIds = user.cart;
    const newObject = [];
        for (let index = 0; index < cartListItemsIds.length; index++) {
           
        if (cartListItemsIds.length != 0) {
            const item = await Item.findById(cartListItemsIds[index]['itemId']);
            newObject.unshift(
                {
                    "item":item,
                    "count":cartListItemsIds[index]['count']
                }
            );
        }
        
    }
   res.status(200).json({"status":httpsStatus.SUCCESS,"data":newObject});
   } catch (error) {
    console.log(error);
    res.status(200).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
   }
}
module.exports = {
    changeItemCart,getUserCart
   }
