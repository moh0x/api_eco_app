const express = require('express');
const router = express.Router();
const { verifyToken } = require("../../utility/verify_token");
const itemsControoler = require('../../controllers/home/items_controller');
router.get('/getAllItems',verifyToken,itemsControoler.getAllItems);
router.get('/getSearchItem',verifyToken,itemsControoler.getSearchItems);
module.exports = 
router
